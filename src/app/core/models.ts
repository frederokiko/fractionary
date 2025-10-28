// export type ShapeKind =
//   | 'unit'        // hexagone = 1
//   | 'half'        // trapèze = 1/2
//   | 'third'       // losange/parallélogramme = 1/3
//   | 'quarterd'    // trapèze = 1/4 droite
//   | 'quarterg'    // trapèze = 1/4 gauche
//   | 'sixth'       // triangle = 1/6
//   | 'ninth-top'   // triangle = 1/9
//   | 'ninth-bot'   // triangle = 1/9
//   | 'ninth-mid'   // parallélogramme = 1/9
//   | 'twelfthd'    // petit triangle = 1/12 droite
//   | 'twelfthg'    // petit triangle = 1/12 gauche
//   | 'eighteenth'; // paralelograme (la “queue” violette)

// export interface ShapeSpec {
//   id: string;            // unique pour chaque emplacement du puzzle
//   kind: ShapeKind;
//   x: number;             // position (%) dans le canvas (responsive)
//   y: number;
//   r?: number;            // rotation en degrés
//   color?: string;        // couleur (palette)
// }

// export interface PuzzleDefinition {
//   name: 'cat' | 'bird';
//   unitLabel: '1';        // affichage du numérateur pour l’unité
//   shapes: ShapeSpec[];   // tous les emplacements qui composent la silhouette
// }


// -----------------------------
// TYPES DE BASE
// -----------------------------
export type ShapeKind =
  | 'unit'        // hexagone = 1
  | 'half'        // trapèze = 1/2
  | 'third'       // losange/parallélogramme = 1/3
  | 'quarterd'    // trapèze = 1/4 droite
  | 'quarterg'    // trapèze = 1/4 gauche
  | 'sixth'       // triangle = 1/6
  | 'ninth-top'   // triangle = 1/9 haut
  | 'ninth-bot'   // triangle = 1/9 bas
  | 'ninth-mid'   // parallélogramme = 1/9
  | 'twelfthd'    // petit triangle = 1/12 droite
  | 'twelfthg'    // petit triangle = 1/12 gauche
  | 'eighteenth'; // parallélogramme fin = 1/18 (queue violette)

export interface ShapeSpec {
  id: string;            // identifiant unique pour chaque forme du puzzle
  kind: ShapeKind;       // type de forme
  x: number;             // position en % (responsive)
  y: number;
  r?: number;            // rotation en degrés
  color?: string;        // couleur locale optionnelle
}

// -----------------------------
// NOUVEAU : Référentiels (par animal)
// -----------------------------

// Fraction individuelle (valeur + apparence)
export interface FractionRef {
  label: string;   // ex: "1/6"
  value: number;   // ex: 0.166
  color: string;   // code couleur exact
  clip: string;    // nom de forme CSS (hexagon, trap-right, triangle…)
}

// Référentiel complet pour un animal
export interface ReferenceSet {
  name: 'cat' | 'bird';
  baseUnitLabel: string;  // ex: "1" pour hexagone
  //shapes: Record<ShapeKind, FractionRef>;
   shapes: Partial<Record<ShapeKind, FractionRef>>; // <= AU LIEU DE Record
}

// -----------------------------
// DÉFINITION D’UN PUZZLE (silhouette)
// -----------------------------
export interface PuzzleDefinition {
  name: 'cat' | 'bird';
  unitLabel: string;      // affichage du numérateur pour l’unité
  shapes: ShapeSpec[];    // toutes les formes qui composent le puzzle
}
