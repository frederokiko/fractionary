import { PuzzleDefinition } from '../core/models';

export const CAT_PUZZLE: PuzzleDefinition = {
  name: 'cat',
  unitLabel: '1',
  shapes: [
    // tête
    // 1/1
    { id:'head-hex', kind:'unit', x:60, y:30, r:0, color:'rgba(239, 154, 72)' },
    { id:'head-hex2', kind:'unit', x:40, y:70, r:0, color:'rgba(239, 154, 72)' },
    // 1/3
    { id:'rh-1', kind:'third', x:18, y:30, r:30, color:'rgb(218, 37, 29)' },
    // { id:'rh-2', kind:'third', x:16, y:36, r:29, color:'rgb(218, 37, 29)' },
    // { id:'rh-3', kind:'third', x:38, y:35, r:30, color:'rgb(218, 37, 29)' },
    // 1/6
    { id:'ear-l', kind:'sixth', x:12, y:18, r:0, color:'rgb(255, 245, 0)' },
   // { id:'ear-r', kind:'sixth', x:24, y:18, r:60, color:'rgb(255, 245, 0)' },

    // corps (ex., 2 hexagones :unité)
    //{ id:'body-hex-1', kind:'unit', x:45, y:55, r:0, color:'rgba(239, 154, 72)' },
    //{ id:'body-hex-2', kind:'unit', x:65, y:45, r:0, color:'rgba(239, 154, 72)' },
    // 1/12
    { id:'douz-1', kind:'twelfth', x:58, y:26, r:30, color:'rgb(241, 154, 190)' },
    // { id:'douz-2', kind:'twelfth', x:64, y:26, r:33, color:'rgb(241, 154, 190)' },
    // { id:'douz-3', kind:'twelfth', x:64, y:26, r:36, color:'rgb(241, 154, 190)' },
    // { id:'douz-4', kind:'twelfth', x:64, y:26, r:39, color:'rgb(241, 154, 190)' },
    // 1/3
    // { id:'rh-4', kind:'third', x:38, y:40, r:30, color:'rgb(218, 37, 29)' },

    // 1/6
   // { id:'tri-1', kind:'sixth', x:58, y:32, r:0, color:'rgb(255, 245, 0)' },

    //pattes avant
    // Parrallelogramme  1/9
    { id:'tail-1', kind:'edge', x:77, y:22, r:0, color:'rgb(0, 70, 142)' },
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
  ]
};
    // 1/2
    //{ id:'tail-4', kind:'half', x:64, y:26, r:30, color:'rgb(0, 70, 142)' },