import { PuzzleDefinition } from '../core/models';

export const CAT_PUZZLE: PuzzleDefinition = {
  name: 'cat',
  unitLabel: '1',
  shapes: [
    // //y=hauteur    
    // //x=largeur
    // tête
    { id:'head', kind:'unit', x:22.5, y:67, r:0, color:'rgb(239,154,72)' },
    // oreilles droite 
    //1/12 compposées de 2 parts (1/12d et 1/12g)
    { id:'ear-r-0', kind:'twelfthg', x:29, y:78, r:90, color:'rgb(241,154,190)' },
    { id:'ear-r-1', kind:'twelfthg', x:29, y:40, r:160, color:'rgba(241,154,190)' },
    //orilles gauche
    { id:'ear-l-0', kind:'twelfthd', x:28, y:55, r:180, color:'rgb(241,154,190)' },
    { id:'ear-l-1', kind:'twelfthg', x:35, y:20, r:180, color:'rgb(241,154,190)' },
    //corps 
    //1/1 2fois
    //1er a gauche
    { id:'body-0', kind:'unit', x:30, y:78.5, r:90, color:'rgb(239,154,72)' },//ok
    //2eme a droite
    { id:'body-1', kind:'unit', x:42, y:78.5, r:90, color:'rgb(239,154,72)' },//ok
    //1/2 2fois
    { id:'body-2', kind:'half', x:45, y:71.5, r:-30, color:'rgb(0,70,142)' },//ok
    { id:'body-3', kind:'half', x:39, y:71.5, r:210, color:'rgb(0,70,142)' },//ok
    //1/12 gauche 2fois centre du corps
    { id:'body-4', kind:'twelfthg', x:36, y:78.5, r:150, color:'rgb(241,154,190)' },//ok
    { id:'body-5', kind:'twelfthd', x:36, y:78.5, r:150, color:'rgb(241,154,190)' },//ok
    //1/12 droite 3fois
    //cou
    { id:'body-6', kind:'twelfthd', x:27.1, y:71.4, r:210, color:'rgb(241,154,190)' },//a verifier
    //dos du chat
    { id:'body-7', kind:'twelfthd', x:42, y:64.5, r:150, color:'rgb(241,154,190)' },//ok
    { id:'body-8', kind:'twelfthg', x:42, y:64.5, r:150, color:'rgb(241,154,190)' },//ok
    //pattes avant
    //1/9 2
    // //y=hauteur    
    // //x=largeur
    { id:'front-leg-0', kind:'ninth-mid', x:25, y:90, r:30, color:'rgb(122,64,118)' },
    { id:'front-leg-1', kind:'ninth-mid', x:22, y:88, r:30, color:'rgb(122,64,118)' },
    //pattes arrières
    //1/9 1fois et 1/12 1fois
    { id:'back-leg-0', kind:'ninth-mid', x:35.8, y:91.2, r:30, color:'rgb(122,64,118)' },
    { id:'back-leg-1', kind:'twelfthg', x:45.5, y: 85.5, r:210, color:'rgb(241,154,190)' },//je travaille ici
    //queue
    // 1/9 gauche 2
    { id:'tail-0', kind:'ninth-mid', x:52, y:78.5, r:-30, color:'rgb(122,64,118)' },//je travaille ici
    { id:'tail-1', kind:'ninth-mid', x:80, y:90, r:270, color:'rgb(122,64,118)' },
    // 1/9 droite 3fois
    { id:'tail-2', kind:'ninth-mid', x:80, y:93, r:270, color:'rgb(122,64,118)' },
    { id:'tail-3', kind:'ninth-mid', x:80, y:94, r:270, color:'rgb(122,64,118)' },
    { id:'tail-4', kind:'ninth-mid', x:80, y:96, r:270, color:'rgb(122,64,118)' },   
]
};



// ici on teste toute l'imbriquation des formes
    // // ici, on teste toute l'imbriquation des formes pour faire l'hexagone avec ses découpes en 1/2
    // { id:'test-hex', kind:'unit', x:50, y:50, r:0, color:'rgba(190, 23, 23, 0.5)' },
    // { id:'test-tri-1', kind:'half', x:50, y:50, r:0, color:'rgba(255,0,0,0.5)' },
    // { id:'test-tri-2', kind:'half', x:50, y:50, r:180, color:'rgba(0,0,255,0.5)' },
    // //ici, on teste toute l'imbriquation des formes pour faire l'hexagone avec ses découpes en 1/3
    // { id:'test-hex-2', kind:'unit', x:65, y:65, r:0, color:'rgba(190, 23, 23, 0.5)' },
    // { id:'test-rh-1', kind:'third', x:65, y:65, r:0, color:'rgba(255,0,0,0.5)' },
    // { id:'test-rh-2', kind:'third', x:65, y:65, r:120, color:'rgba(0,255,0,0.5)' },
    // { id:'test-rh-3', kind:'third', x:65, y:65, r:240, color:'rgba(0,0,255,0.5)' },
    // //ici, on teste toute l'imbriquation des formes pour faire l'hexagone avec ses découpes en 1/4
    // { id:'test-hex-3', kind:'unit', x:10, y:10, r:30, color:'rgba(190, 23, 23, 0.5)' },
    // { id:'test-qtz-1', kind:'quarterd',  x:10, y:10, r:270, color:'rgba(255,0,0,0.5)' },
    // { id:'test-qtz-2', kind:'quarterg',  x:10, y:10, r:90, color:'rgba(0,255,0,0.5)' },
    // { id:'test-qtz-3', kind:'quarterd',  x:10, y:10, r:90, color:'rgba(0,0,255,0.5)' },
    // { id:'test-qtz-4', kind:'quarterg',  x:10, y:10, r:270, color:'rgba(255,255,0,0.5)' },
    // // ici, on teste toute l'imbriquation des formes pour faire l'hexagone avec ses découpes en 1/6
    // { id:'test-hex-4', kind:'unit', x:80, y:80, r:0, color:'rgba(190, 23, 23, 0.5)' },
    // { id:'test-tri-1', kind:'sixth', x:80, y:80, r:0, color:'rgba(255,0,0,0.5)' },
    // { id:'test-tri-2', kind:'sixth', x:80, y:80, r:60, color:'rgba(0,255,0,0.5)' },
    // { id:'test-tri-3', kind:'sixth', x:80, y:80, r:120, color:'rgba(0,0,255,0.5)' },
    // { id:'test-tri-4', kind:'sixth', x:80, y:80, r:180, color:'rgba(255,255,0,0.5)' },
    // { id:'test-tri-5', kind:'sixth', x:80, y:80, r:240, color:'rgba(0,255,255,0.5)' },
    // { id:'test-tri-6', kind:'sixth', x:80, y:80, r:300, color:'rgba(255,0,255,0.5)' },
    // // ici, on teste toute l'imbriquation des formes pour faire l'hexagone avec ses découpes en 1/9
    // { id:'test-hex-5', kind:'unit', x:30, y:80, r:90, color:'rgba(190, 23, 23, 0.5)' },
    // //premier groupe de parralelogrammes
     
    // //y=hauteur    
    // //x=largeur
    // // bandes // direction 90°
    // { id:'n9-1', kind:'ninth-top', x:31, y:82.5,r:90, color:'rgba(255,0,255,0.5)' },
    // { id:'n9-2', kind:'ninth-top', x:30, y:80, r:90 , color:'rgba(0,255,255,0.5)'},
    // { id:'n9-3', kind:'ninth-top', x:29, y:77.8, r:90 , color:'rgba(255,255,0,0.5)'},

    // // direction 150°
    // { id:'n9-4', kind:'ninth-top', x:28, y:70.5, r:150, color:'rgba(0,0,255,0.5)' },
    // { id:'n9-5', kind:'ninth-top', x:27, y:72.8, r:150, color:'rgba(0,255,0,0.5)' },
    // { id:'n9-6', kind:'ninth-top', x:26, y:75.2, r:150, color:'rgba(255, 0, 0, 0.5)' },

    // // direction 240°
    // { id:'n9-7', kind:'ninth-mid', x:27, y:87.2, r:30 , color:'rgba(255,255,0,0.5)'},
    // { id:'n9-8', kind:'ninth-mid', x:25.9, y:84.8, r:30 , color:'rgba(0,255,255,0.5)'},
    // { id:'n9-9', kind:'ninth-mid', x:28, y:89.3,r:30 , color:'rgba(255,0,255,0.5)'},

    // // ici, on teste toute l'imbriquation des formes pour faire l'hexagone avec ses découpes en 1/12
    // { id:'test-hex-6', kind:'unit', x:70, y:30, r:0, color:'rgba(190, 23, 23, 0.5)' },
    // { id:'test-douz-1', kind:'twelfthd', x:70, y:30, r:0, color:'rgba(255,0,0,0.5)' },
    // { id:'test-douz-2', kind:'twelfthg', x:70, y:30, r:0, color:'rgba(0,255,0,0.5)' },
    // { id:'test-douz-3', kind:'twelfthd', x:70, y:30, r:60, color:'rgba(0,0,255,0.5)' },
    // { id:'test-douz-4', kind:'twelfthg', x:70, y:30, r:60, color:'rgba(255,255,0,0.5)' },
    // { id:'test-douz-5', kind:'twelfthd', x:70, y:30, r:120, color:'rgba(0,255,255,0.5)' },
    // { id:'test-douz-6', kind:'twelfthg', x:70, y:30, r:120, color:'rgba(255,0,255,0.5)' },
    // { id:'test-douz-7', kind:'twelfthd', x:70, y:30, r:180, color:'rgba(192,192,192,0.5)' },
    // { id:'test-douz-8', kind:'twelfthg', x:70, y:30, r:180, color:'rgba(128,0,128,0.5)' },
    // { id:'test-douz-9', kind:'twelfthd', x:70, y:30, r:240, color:'rgba(255,165,0,0.5)' },
    // { id:'test-douz-10', kind:'twelfthg', x:70, y:30, r:240, color:'rgba(0,128,0,0.5)' },
    // { id:'test-douz-11', kind:'twelfthd', x:70, y:30, r:300, color:'rgba(0,0,128,0.5)' },
    // { id:'test-douz-12', kind:'twelfthg', x:70, y:30, r:300, color:'rgba(128,128,0,0.5)' },

    // // hexagone support pour les 18èmes
    // { id:'test-hex-7', kind:'unit', x:20, y:20, r:90, color:'rgba(190,23,23,.15)' },
    // //y=hauteur
    // //x=largeur
    // //1er traingle superieur composé de 3 petits triangles (1/18 chacun)
    // { id:'t18-1', kind:'eighteenth', x:20, y:23.5, r:60, color:'rgba(255,0,0,.6)' },
    // { id:'t18-2', kind:'eighteenth', x:20, y:23.5, r:180, color:'rgba(0,150,255,.6)' }, // 90+120
    // { id:'t18-3', kind:'eighteenth', x:20, y:23.5, r:300, color:'rgba(255,165,0,.6)' }, // 210+120
    // // 2ème triangle droit composé de 3 petits triangles (1/18 chacun)
    // { id:'t18-4', kind:'eighteenth', x:23, y:26, r:240, color:'rgba(255,0,0,.6)' },
    // { id:'t18-5', kind:'eighteenth', x:23, y:26, r:120, color:'rgba(0,150,255,.6)' }, // 0+120
    // { id:'t18-6', kind:'eighteenth', x:23, y:26, r:0, color:'rgba(255,165,0,.6)' }, // 120+120
    // // 3ème triangle gauche composé de 3 petits triangles (1/18 chacun)
    // { id:'t18-7', kind:'eighteenth', x:23, y:30.5, r:300, color:'rgba(255,0,0,.6)' },
    // { id:'t18-8', kind:'eighteenth', x:23, y:30.5, r:60, color:'rgba(0,150,255,.6)' }, // 240+120
    // { id:'t18-9', kind:'eighteenth', x:23, y:30.5, r:180, color:'rgba(255,165,0,.6)' }, // 360+120
    // // 4ème triangle inférieur composé de 3 petits triangles (1/18 chacun)
    // { id:'t18-10', kind:'eighteenth', x:20, y:33, r:0, color:'rgba(255,0,0,.6)' },
    // { id:'t18-11', kind:'eighteenth', x:20, y:33, r:240, color:'rgba(0,150,255,.6)' }, // 210+120
    // { id:'t18-12', kind:'eighteenth', x:20, y:33, r:120, color:'rgba(255,165,0,.6)' }, // 330+120
    // // 5ème triangle gauche composé de 3 petits triangles (1/18 chacun)
    // { id:'t18-13', kind:'eighteenth', x:17, y:30.5, r:180, color:'rgba(255,0,0,.6)' },
    // { id:'t18-14', kind:'eighteenth', x:17, y:30.5, r:300, color:'rgba(0,150,255,.6)' }, // 240+120
    // { id:'t18-15', kind:'eighteenth', x:17, y:30.5, r:60, color:'rgba(255,165,0,.6)' }, // 360+120
    // // 6ème triangle droit composé de 3 petits triangles (1/18 chacun)
    // { id:'t18-16', kind:'eighteenth', x:17, y:26, r:120, color:'rgba(255,0,0,.6)' },
    // { id:'t18-17', kind:'eighteenth', x:17, y:26, r:0, color:'rgba(0,150,255,.6)' }, // 120+120
    // { id:'t18-18', kind:'eighteenth', x:17, y:26, r:240, color:'rgba(255,165,0,.6)' }, // 240+120

