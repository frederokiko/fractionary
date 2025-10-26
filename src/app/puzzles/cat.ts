import { PuzzleDefinition } from '../core/models';

export const CAT_PUZZLE: PuzzleDefinition = {
  name: 'cat',
  unitLabel: '1',
  shapes: [
      // ici, on teste toute l'imbriquation des formes pour faire l'hexagone avec ses découpes en 1/2
      { id:'test-hex', kind:'unit', x:50, y:50, r:0, color:'rgba(190, 23, 23, 0.5)' },
      { id:'test-tri-1', kind:'half', x:50, y:50, r:0, color:'rgba(255,0,0,0.5)' },
      { id:'test-tri-2', kind:'half', x:50, y:50, r:180, color:'rgba(0,0,255,0.5)' },
      //ici, on teste toute l'imbriquation des formes pour faire l'hexagone avec ses découpes en 1/3
      { id:'test-hex-2', kind:'unit', x:65, y:65, r:0, color:'rgba(190, 23, 23, 0.5)' },
      { id:'test-rh-1', kind:'third', x:65, y:65, r:0, color:'rgba(255,0,0,0.5)' },
      { id:'test-rh-2', kind:'third', x:65, y:65, r:120, color:'rgba(0,255,0,0.5)' },
      { id:'test-rh-3', kind:'third', x:65, y:65, r:240, color:'rgba(0,0,255,0.5)' },
      //ici, on teste toute l'imbriquation des formes pour faire l'hexagone avec ses découpes en 1/4
      { id:'test-hex-3', kind:'unit', x:10, y:10, r:30, color:'rgba(190, 23, 23, 0.5)' },
      { id:'test-qtz-1', kind:'quarterd',  x:10, y:10, r:270, color:'rgba(255,0,0,0.5)' },
      { id:'test-qtz-2', kind:'quarterg',  x:10, y:10, r:90, color:'rgba(0,255,0,0.5)' },
      { id:'test-qtz-3', kind:'quarterd',  x:10, y:10, r:90, color:'rgba(0,0,255,0.5)' },
      { id:'test-qtz-4', kind:'quarterg',  x:10, y:10, r:270, color:'rgba(255,255,0,0.5)' },
      // ici, on teste toute l'imbriquation des formes pour faire l'hexagone avec ses découpes en 1/6
      { id:'test-hex', kind:'unit', x:80, y:80, r:0, color:'rgba(190, 23, 23, 0.5)' },
      { id:'test-tri-1', kind:'sixth', x:80, y:80, r:0, color:'rgba(255,0,0,0.5)' },
      { id:'test-tri-2', kind:'sixth', x:80, y:80, r:60, color:'rgba(0,255,0,0.5)' },
      { id:'test-tri-3', kind:'sixth', x:80, y:80, r:120, color:'rgba(0,0,255,0.5)' },
      { id:'test-tri-4', kind:'sixth', x:80, y:80, r:180, color:'rgba(255,255,0,0.5)' },
      { id:'test-tri-5', kind:'sixth', x:80, y:80, r:240, color:'rgba(0,255,255,0.5)' },
      { id:'test-tri-6', kind:'sixth', x:80, y:80, r:300, color:'rgba(255,0,255,0.5)' },
      // ici, on teste toute l'imbriquation des formes pour faire l'hexagone avec ses découpes en 1/9
      { id:'test-hex', kind:'unit', x:30, y:80, r:90, color:'rgba(190, 23, 23, 0.5)' },
      //premier groupe de parralelogrammes
      { id:'test-edge-1', kind:'edge', x:26, y:76, r:0, color:'rgba(255,0,0,0.5)' },
      { id:'test-edge-2', kind:'edge', x:24.5, y:79, r:0, color:'rgba(0,255,0,0.5)' },
      { id:'test-edge-3', kind:'edge', x:23, y:82, r:0, color:'rgba(0,0,255,0.5)' },
      // ici, on teste toute l'imbriquation des formes pour faire l'hexagone avec ses découpes en 1/12
      { id:'test-hex', kind:'unit', x:70, y:30, r:0, color:'rgba(190, 23, 23, 0.5)' },
      { id:'test-douz-1', kind:'twelfthd', x:70, y:30, r:0, color:'rgba(255,0,0,0.5)' },
      { id:'test-douz-2', kind:'twelfthg', x:70, y:30, r:0, color:'rgba(0,255,0,0.5)' },
      { id:'test-douz-3', kind:'twelfthd', x:70, y:30, r:60, color:'rgba(0,0,255,0.5)' },
      { id:'test-douz-4', kind:'twelfthg', x:70, y:30, r:60, color:'rgba(255,255,0,0.5)' },
      { id:'test-douz-5', kind:'twelfthd', x:70, y:30, r:120, color:'rgba(0,255,255,0.5)' },
      { id:'test-douz-6', kind:'twelfthg', x:70, y:30, r:120, color:'rgba(255,0,255,0.5)' },
      { id:'test-douz-7', kind:'twelfthd', x:70, y:30, r:180, color:'rgba(192,192,192,0.5)' },
      { id:'test-douz-8', kind:'twelfthg', x:70, y:30, r:180, color:'rgba(128,0,128,0.5)' },
      { id:'test-douz-9', kind:'twelfthd', x:70, y:30, r:240, color:'rgba(255,165,0,0.5)' },
      { id:'test-douz-10', kind:'twelfthg', x:70, y:30, r:240, color:'rgba(0,128,0,0.5)' },
      { id:'test-douz-11', kind:'twelfthd', x:70, y:30, r:300, color:'rgba(0,0,128,0.5)' },
      { id:'test-douz-12', kind:'twelfthg', x:70, y:30, r:300, color:'rgba(128,128,0,0.5)' },

    // hexagone support pour les 18èmes
{ id:'test-hex', kind:'unit', x:20, y:20, r:90, color:'rgba(190,23,23,.15)' },
//y=hauteur
//x=largeur
//1er traingle superieur composé de 3 petits triangles (1/18 chacun)
{ id:'t18-1', kind:'eighteenth', x:20, y:23.5, r:60, color:'rgba(255,0,0,.6)' },
{ id:'t18-2', kind:'eighteenth', x:20, y:23.5, r:180, color:'rgba(0,150,255,.6)' }, // 90+120
{ id:'t18-3', kind:'eighteenth', x:20, y:23.5, r:300, color:'rgba(255,165,0,.6)' }, // 210+120
// 2ème triangle droit composé de 3 petits triangles (1/18 chacun)
{ id:'t18-4', kind:'eighteenth', x:23, y:26, r:240, color:'rgba(255,0,0,.6)' },
{ id:'t18-5', kind:'eighteenth', x:23, y:26, r:120, color:'rgba(0,150,255,.6)' }, // 0+120
{ id:'t18-6', kind:'eighteenth', x:23, y:26, r:0, color:'rgba(255,165,0,.6)' }, // 120+120
// 3ème triangle gauche composé de 3 petits triangles (1/18 chacun)
{ id:'t18-7', kind:'eighteenth', x:23, y:30.5, r:300, color:'rgba(255,0,0,.6)' },
{ id:'t18-8', kind:'eighteenth', x:23, y:30.5, r:60, color:'rgba(0,150,255,.6)' }, // 240+120
{ id:'t18-9', kind:'eighteenth', x:23, y:30.5, r:180, color:'rgba(255,165,0,.6)' }, // 360+120
// 4ème triangle inférieur composé de 3 petits triangles (1/18 chacun)
{ id:'t18-10', kind:'eighteenth', x:20, y:33, r:0, color:'rgba(255,0,0,.6)' },
{ id:'t18-11', kind:'eighteenth', x:20, y:33, r:240, color:'rgba(0,150,255,.6)' }, // 210+120
{ id:'t18-12', kind:'eighteenth', x:20, y:33, r:120, color:'rgba(255,165,0,.6)' }, // 330+120
// 5ème triangle gauche composé de 3 petits triangles (1/18 chacun)
{ id:'t18-13', kind:'eighteenth', x:17, y:30.5, r:180, color:'rgba(255,0,0,.6)' },
{ id:'t18-14', kind:'eighteenth', x:17, y:30.5, r:300, color:'rgba(0,150,255,.6)' }, // 240+120
{ id:'t18-15', kind:'eighteenth', x:17, y:30.5, r:60, color:'rgba(255,165,0,.6)' }, // 360+120
// 6ème triangle droit composé de 3 petits triangles (1/18 chacun)
{ id:'t18-16', kind:'eighteenth', x:17, y:26, r:120, color:'rgba(255,0,0,.6)' },
{ id:'t18-17', kind:'eighteenth', x:17, y:26, r:0, color:'rgba(0,150,255,.6)' }, // 120+120
{ id:'t18-18', kind:'eighteenth', x:17, y:26, r:240, color:'rgba(255,165,0,.6)' }, // 240+120

]
};
    // tête
    // 1/1
    //{ id:'head-hex', kind:'unit', x:60, y:30, r:0, color:'rgba(239, 154, 72)' },
   // { id:'head-hex2', kind:'unit', x:40, y:70, r:0, color:'rgba(239, 154, 72)' },
    // 1/3
   // { id:'rh-1', kind:'third', x:18, y:30, r:30, color:'rgb(218, 37, 29)' },
    // { id:'rh-2', kind:'third', x:16, y:36, r:29, color:'rgb(218, 37, 29)' },
    // { id:'rh-3', kind:'third', x:38, y:35, r:30, color:'rgb(218, 37, 29)' },
    // 1/6
    //{ id:'ear-l', kind:'sixth', x:12, y:18, r:0, color:'rgb(255, 245, 0)' },
   // { id:'ear-r', kind:'sixth', x:24, y:18, r:60, color:'rgb(255, 245, 0)' },

    // corps (ex., 2 hexagones :unité)
    //{ id:'body-hex-1', kind:'unit', x:45, y:55, r:0, color:'rgba(239, 154, 72)' },
    //{ id:'body-hex-2', kind:'unit', x:65, y:45, r:0, color:'rgba(239, 154, 72)' },
    // 1/12
    //{ id:'douz-1', kind:'twelfth', x:58, y:26, r:30, color:'rgb(241, 154, 190)' },
    // { id:'douz-2', kind:'twelfth', x:64, y:26, r:33, color:'rgb(241, 154, 190)' },
    // { id:'douz-3', kind:'twelfth', x:64, y:26, r:36, color:'rgb(241, 154, 190)' },
    // { id:'douz-4', kind:'twelfth', x:64, y:26, r:39, color:'rgb(241, 154, 190)' },
    // 1/3
    // { id:'rh-4', kind:'third', x:38, y:40, r:30, color:'rgb(218, 37, 29)' },

    // 1/6
   // { id:'tri-1', kind:'sixth', x:58, y:32, r:0, color:'rgb(255, 245, 0)' },

    //pattes avant
    // Parrallelogramme  1/9
    //{ id:'tail-1', kind:'edge', x:77, y:22, r:0, color:'rgb(0, 70, 142)' },
    //{ id:'tail-2', kind:'edge', x:84, y:26, r:30, color:'rgb(0, 70, 142)' },

    //pattes arrières
    // Parrallelogramme  1/9
    //{ id:'tail-3', kind:'edge', x:77, y:22, r:0, color:'rgb(0, 70, 142)' },
    //queue
// Parrallelogramme  1/9
    //{ id:'tail-4', kind:'edge', x:80, y:40, r:20, color:'rgb(0, 70, 142)' },
    // { id:'tail-5', kind:'edge', x:77, y:24, r:0, color:'rgb(0, 70, 142)' },
    // { id:'tail-6', kind:'edge', x:77, y:26, r:0, color:'rgb(0, 70, 142)' },
    // { id:'tail-7', kind:'edge', x:77, y:28, r:0, color:'rgb(0, 70, 142)' },
    // { id:'tail-8', kind:'edge', x:77, y:30, r:0, color:'rgb(0, 70, 142)' },
   // { id:'tail-4', kind:'half', x:50, y:35, r:45, color:'rgb(0, 70, 142)' },
  
//};
    // 1/2
    //{ id:'tail-4', kind:'half', x:64, y:26, r:30, color:'rgb(0, 70, 142)' },




