export type ShapeKind =
  | 'unit'        // hexagone = 1
  | 'half'        // trapèze = 1/2
  | 'third'       // losange/parallélogramme = 1/3
  | 'sixth'       // triangle = 1/6
  | 'twelfth'     // petit triangle = 1/12 (si tu en veux)
  | 'edge';       // paralelograme (la “queue” violette)

export interface ShapeSpec {
  id: string;            // unique pour chaque emplacement du puzzle
  kind: ShapeKind;
  x: number;             // position (%) dans le canvas (responsive)
  y: number;
  r?: number;            // rotation en degrés
  color?: string;        // couleur (palette)
}

export interface PuzzleDefinition {
  name: 'cat' | 'bird';
  unitLabel: '1';        // affichage du numérateur pour l’unité
  shapes: ShapeSpec[];   // tous les emplacements qui composent la silhouette
}
