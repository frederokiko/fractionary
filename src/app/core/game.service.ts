// import { Injectable } from '@angular/core';
// import { PuzzleDefinition, ShapeKind, ShapeSpec } from './models';

// type GameState = 'intro' | 'memorize' | 'play' | 'win';

// @Injectable({ providedIn: 'root' })
// export class GameService {
//   state: GameState = 'intro';
//   currentFraction!: ShapeKind;       // ex: 'third'
//   queue: ShapeKind[] = [];           // séquence à placer (avec répétitions)
//   placed = new Set<string>();        // ids déjà remplis

//   start(puzzle: PuzzleDefinition) {
//     this.state = 'memorize';         // on montre 3s les vraies couleurs
//     const kinds = puzzle.shapes.map(s => s.kind);
//     // ordre : on mélange ; si tu veux imposer un ordre par fraction, fais différemment
//     this.queue = this.shuffle(kinds);
//     this.currentFraction = this.queue[0];
//     this.placed.clear();

//     // après 3s, on passe en jeu
//     setTimeout(() => this.state = 'play', 3000);
//   }

//   tryPlace(puzzle: PuzzleDefinition, chosenKind: ShapeKind): {ok: boolean, targetId?: string} {
//     if (this.state !== 'play') return { ok: false };
//     // Doit correspondre à la fraction demandée
//     if (chosenKind !== this.currentFraction) return { ok: false };

//     // Trouver un emplacement non rempli de ce type
//     const spot = puzzle.shapes.find(s => s.kind === chosenKind && !this.placed.has(s.id));
//     if (!spot) return { ok: false };

//     this.placed.add(spot.id);

//     // Avancer la queue
//     this.queue.shift();
//     this.currentFraction = this.queue[0];

//     if (!this.currentFraction) this.state = 'win';

//     return { ok: true, targetId: spot.id };
//   }

//   isFilled(id: string) { return this.placed.has(id); }

//   private shuffle<T>(arr: T[]): T[] {
//     const a = [...arr];
//     for (let i = a.length - 1; i > 0; i--) {
//       const j = Math.floor(Math.random() * (i + 1));
//       [a[i], a[j]] = [a[j], a[i]];
//     }
//     return a;
//   }
// }



import { Injectable } from '@angular/core';
import { PuzzleDefinition, ShapeKind } from './models';
import { ReferenceSet } from './models';              // <-- ajouté
import { CAT_REFERENCE } from './fractions/cat.ref';  // <-- à créer (ou déjà créé)
import { BIRD_REFERENCE } from './fractions/bird.ref';

type GameState = 'intro' | 'memorize' | 'play' | 'win';

@Injectable({ providedIn: 'root' })
export class GameService {
  // --- état du jeu ---
  state: GameState = 'intro';
  currentFraction!: ShapeKind;   // ex: 'third'
  queue: ShapeKind[] = [];       // ordre des fractions (avec répétitions)
  placed = new Set<string>();    // ids déjà remplis

  // --- référentiel actif (chat ou oiseau) ---
  reference!: ReferenceSet;      // { name, baseUnitLabel, shapes: Record<ShapeKind, FractionRef> }

  /** Choisir le référentiel (à appeler avant start) */
  setReference(animal: 'cat' | 'bird') {
    this.reference = (animal === 'cat') ? CAT_REFERENCE : BIRD_REFERENCE;
  }

  /** Démarrer une partie sur un puzzle donné (suppose setReference() déjà appelé) */
  start(puzzle: PuzzleDefinition) {
    if (!this.reference) {
      // fallback safe si oublié : par défaut "cat"
      this.setReference('cat');
    }

    this.state = 'memorize';

    // On ne met dans la file que les kinds réellement connus du référentiel actif
    const kinds = puzzle.shapes
      .map(s => s.kind)
      .filter(k => !!this.reference.shapes[k]);

    this.queue = this.shuffle(kinds);
    this.currentFraction = this.queue[0];
    this.placed.clear();

    // Après 3s d'affichage mémorisation → jeu
    setTimeout(() => (this.state = 'play'), 3000);
  }

  /** Tentative de placement : on compare la fraction demandée avec le choix du joueur */
  tryPlace(puzzle: PuzzleDefinition, chosenKind: ShapeKind): { ok: boolean; targetId?: string } {
    if (this.state !== 'play') return { ok: false };
    if (chosenKind !== this.currentFraction) return { ok: false };

    const spot = puzzle.shapes.find(
      s => s.kind === chosenKind && !this.placed.has(s.id)
    );
    if (!spot) return { ok: false };

    this.placed.add(spot.id);

    // Avance la file
    this.queue.shift();
    this.currentFraction = this.queue[0];

    if (!this.currentFraction) this.state = 'win';

    return { ok: true, targetId: spot.id };
  }

  /** Utilitaires */
  isFilled(id: string) { return this.placed.has(id); }

  /** Libellé fraction (ex: "1/6") selon le référentiel actif */
  getFractionLabel(kind: ShapeKind): string {
    return this.reference?.shapes[kind]?.label ?? kind;
  }

  /** Couleur officielle pour un kind selon le référentiel actif */
  getColor(kind: ShapeKind): string {
    return this.reference?.shapes[kind]?.color ?? '#ddd';
  }

  /** Liste des kinds à afficher dans la palette (dans l’ordre du référentiel) */
  getPaletteKinds(): ShapeKind[] {
    return Object.keys(this.reference?.shapes || {}) as ShapeKind[];
  }

  /** Reset */
  reset() {
    this.state = 'intro';
    this.currentFraction = undefined as any;
    this.queue = [];
    this.placed.clear();
  }

  private shuffle<T>(arr: T[]): T[] {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }
}
