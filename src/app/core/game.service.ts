// src/app/core/game.service.ts
import { Injectable } from '@angular/core';
import { PuzzleDefinition, ShapeKind } from './models';
import { ReferenceSet } from './models';
import { CAT_REFERENCE } from './fractions/cat.ref';
import { BIRD_REFERENCE } from './fractions/bird.ref';

type GameState = 'intro' | 'memorize' | 'play' | 'win';

@Injectable({ providedIn: 'root' })
export class GameService {
  // --- état du jeu ---
  state: GameState = 'intro';

  // 🚩 Nouveauté : on travaille par CLÉS de fraction (ex: "1/4"), pas par kind
  currentKey!: string;     // clé de fraction demandée (ex: "1/6")
  private queueKeys: string[] = []; // file d’attente (avec répétitions)
  placed = new Set<string>();       // ids déjà remplis

  // --- référentiel actif (chat ou oiseau) ---
  reference!: ReferenceSet;

  /** Choisir le référentiel (à appeler avant start) */
  setReference(animal: 'cat' | 'bird') {
    this.reference = (animal === 'cat') ? CAT_REFERENCE : BIRD_REFERENCE;
  }

  /** true si le kind existe dans le référentiel */
  hasKind(kind: ShapeKind): boolean {
    const ref = this.reference;
    return !!ref && !!ref.shapes && !!ref.shapes[kind];
  }

  /** Clé de fraction pour un kind (ex: "1/4") */
  keyOf(kind: ShapeKind): string {
    return this.reference?.shapes?.[kind]?.label ?? String(kind);
  }

  /** Couleur canonique pour une CLÉ (on prend la première rencontrée dans le ref) */
  colorOfKey(key: string): string {
    if (!this.reference?.shapes) return '#ccc';
    for (const k in this.reference.shapes) {
      const ref = this.reference.shapes[k as ShapeKind];
      if (ref?.label === key) return ref.color;
    }
    return '#ccc';
  }

  /** Démarrer une partie sur un puzzle donné (suppose setReference() déjà appelé) */
  start(puzzle: PuzzleDefinition) {
    if (!this.reference) this.setReference('cat');

    this.state = 'memorize';
    this.placed.clear();

    // Crée la queue sur les CLÉS (avec répétitions selon le puzzle)
    const keys = puzzle.shapes
      .filter(s => this.hasKind(s.kind))
      .map(s => this.keyOf(s.kind));

    this.queueKeys = this.shuffle(keys);
    this.currentKey = this.queueKeys[0];

    // Après 5s d'affichage mémorisation → jeu (tu avais 5000ms)
    setTimeout(() => (this.state = 'play'), 5000);
  }

  /**
   * Tentative de placement :
   * - le joueur clique sur une tuile de fraction (on te passe un ShapeKind "représentatif"),
   * - on compare par CLÉ (ex: "1/4"), et on accepte n'importe quel kind miroir.
   */
  tryPlace(puzzle: PuzzleDefinition, chosenKind: ShapeKind): { ok: boolean; targetId?: string } {
    if (this.state !== 'play') return { ok: false };

    const chosenKey = this.keyOf(chosenKind);
    if (chosenKey !== this.currentKey) return { ok: false };

    // Trouver un emplacement non rempli dont la clé == currentKey (n'importe quel kind)
    const spot = puzzle.shapes.find(s =>
      !this.placed.has(s.id) &&
      this.hasKind(s.kind) &&
      this.keyOf(s.kind) === this.currentKey
    );
    if (!spot) return { ok: false };

    this.placed.add(spot.id);

    // Avancer la queue (de CLÉS)
    this.queueKeys.shift();
    this.currentKey = this.queueKeys[0];

    if (!this.currentKey) this.state = 'win';

    return { ok: true, targetId: spot.id };
  }

  /** Utilitaires d’état */
  isFilled(id: string) { return this.placed.has(id); }

  /** Libellé fraction (ex: "1/6") selon le référentiel actif */
  getFractionLabel(kind: ShapeKind): string {
    return this.reference?.shapes[kind]?.label ?? String(kind);
  }

  /** Couleur officielle pour un kind selon le référentiel actif */
  getColor(kind: ShapeKind): string {
    return this.reference?.shapes[kind]?.color ?? '#ddd';
  }

  /** Liste des kinds à afficher dans la palette (si tu l’utilises encore) */
  getPaletteKinds(): ShapeKind[] {
    return Object.keys(this.reference?.shapes || {}) as ShapeKind[];
  }

  /** Banque : items uniques par clé de fraction (une tuile par fraction) */
  getBankGroups(puzzle: PuzzleDefinition): { key: string; kind: ShapeKind }[] {
    const seen = new Set<string>();
    const items: { key: string; kind: ShapeKind }[] = [];
    for (const s of puzzle.shapes) {
      if (!this.hasKind(s.kind)) continue;
      const key = this.keyOf(s.kind);
      if (!seen.has(key)) {
        seen.add(key);
        items.push({ key, kind: s.kind }); // on garde un kind représentatif pour l’icône/couleur
      }
    }
    return items;
  }

  /** Compte requis par clé (combien de pièces de 1/4 à placer, etc.) */
  requiredCountByKey(puzzle: PuzzleDefinition): Record<string, number> {
    const map: Record<string, number> = {};
    for (const s of puzzle.shapes) {
      if (!this.hasKind(s.kind)) continue;
      const key = this.keyOf(s.kind);
      map[key] = (map[key] || 0) + 1;
    }
    return map;
  }

  /** Compte déjà placés par clé */
  placedCountByKey(puzzle: PuzzleDefinition): Record<string, number> {
    const map: Record<string, number> = {};
    for (const s of puzzle.shapes) {
      if (!this.hasKind(s.kind)) continue;
      if (!this.placed.has(s.id)) continue;
      const key = this.keyOf(s.kind);
      map[key] = (map[key] || 0) + 1;
    }
    return map;
  }

  /** Reset complet */
  reset() {
    this.state = 'intro';
    this.currentKey = undefined as any;
    this.queueKeys = [];
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
