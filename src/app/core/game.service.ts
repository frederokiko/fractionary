import { Injectable } from '@angular/core';
import { PuzzleDefinition, ShapeKind, ShapeSpec } from './models';

type GameState = 'intro' | 'memorize' | 'play' | 'win';

@Injectable({ providedIn: 'root' })
export class GameService {
  state: GameState = 'intro';
  currentFraction!: ShapeKind;       // ex: 'third'
  queue: ShapeKind[] = [];           // séquence à placer (avec répétitions)
  placed = new Set<string>();        // ids déjà remplis

  start(puzzle: PuzzleDefinition) {
    this.state = 'memorize';         // on montre 3s les vraies couleurs
    const kinds = puzzle.shapes.map(s => s.kind);
    // ordre : on mélange ; si tu veux imposer un ordre par fraction, fais différemment
    this.queue = this.shuffle(kinds);
    this.currentFraction = this.queue[0];
    this.placed.clear();

    // après 3s, on passe en jeu
    setTimeout(() => this.state = 'play', 3000);
  }

  tryPlace(puzzle: PuzzleDefinition, chosenKind: ShapeKind): {ok: boolean, targetId?: string} {
    if (this.state !== 'play') return { ok: false };
    // Doit correspondre à la fraction demandée
    if (chosenKind !== this.currentFraction) return { ok: false };

    // Trouver un emplacement non rempli de ce type
    const spot = puzzle.shapes.find(s => s.kind === chosenKind && !this.placed.has(s.id));
    if (!spot) return { ok: false };

    this.placed.add(spot.id);

    // Avancer la queue
    this.queue.shift();
    this.currentFraction = this.queue[0];

    if (!this.currentFraction) this.state = 'win';

    return { ok: true, targetId: spot.id };
  }

  isFilled(id: string) { return this.placed.has(id); }

  private shuffle<T>(arr: T[]): T[] {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }
}
