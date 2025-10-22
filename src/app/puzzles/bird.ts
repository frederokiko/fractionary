import { PuzzleDefinition } from '../core/models';

export const Bird_PUZZLE: PuzzleDefinition = {
  name: 'bird',
  unitLabel: '1',
  shapes: [
    // tête
    { id:'head-hex', kind:'unit', x:18, y:30, r:30, color:'#f7901e' },
    { id:'ear-l', kind:'sixth', x:12, y:18, r:0, color:'#67c1e8' },
    { id:'ear-r', kind:'sixth', x:24, y:18, r:60, color:'#67c1e8' },

    // corps (ex., 2 hexagones)
    { id:'body-hex-1', kind:'unit', x:45, y:55, r:0, color:'#f7901e' },
    { id:'body-hex-2', kind:'unit', x:65, y:45, r:0, color:'#f7901e' },

    // exemple de 1/3
    { id:'rh-1', kind:'third', x:38, y:40, r:30, color:'#4caf50' },

    // triangle 1/6
    { id:'tri-1', kind:'sixth', x:58, y:32, r:0, color:'#f06292' },

    // queue = segments “edge”
    { id:'tail-1', kind:'edge', x:77, y:22, r:0, color:'#6a4cff' },
    { id:'tail-2', kind:'edge', x:84, y:26, r:30, color:'#6a4cff' },
  ]
};
