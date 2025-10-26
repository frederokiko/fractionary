export type ShapeKind =
  | 'unit'        // hexagone = 1
  | 'half'        // trapèze = 1/2
  | 'third'       // losange/parallélogramme = 1/3
  | 'quarterd'     // trapèze = 1/4 droite
  | 'quarterg'   // trapèze = 1/4 gauche
  | 'sixth'    // triangle = 1/6
  | 'edge'      // triangle = 1/9
  //| 'ninth'       // petit triangle = 1/9
  | 'twelfthd'     // petit triangle = 1/12 droite
  | 'twelfthg'   // petit triangle = 1/12 gauche
  | 'eighteenth';       // paralelograme (la “queue” violette)

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
