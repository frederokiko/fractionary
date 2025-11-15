import { PuzzleDefinition } from '../core/models';

export const Bird_PUZZLE: PuzzleDefinition = {
  name: 'bird',
  unitLabel: '1',
  shapes: [
    // tête
    //hexagone de tête
    { id:'head-hex', kind:'unit', x:53.5, y:40, r:91, color:'#f7901e' },
    // bec = triangle 1/12
    { id:'beak-tri-1', kind:'twelfthg', x:69.8, y:35, r:60, color:'rgba(241,154,190)' },
    // corps (ex., 2 hexagones)
// hexagone corps
    { id:'body-hex-1', kind:'unit', x:40, y:50, r:91, color:'#f7901e' },
    // ailes = segments 1/3
    { id:'test-rh-1', kind:'third', x:35.5, y:60.5, r:150, color:'rgba(218,39,29)' },
    { id:'test-rh-2', kind:'third', x:40, y:29, r:210, color:'rgba(218,39,29)' },
    // queue = 3*1/12 segments
    { id:'tail-seg-1', kind:'twelfthd', x:30.9, y:46.3, r:90, color:'rgba(241,154,190)' },
    { id:'tail-seg-2', kind:'twelfthd', x:22.8, y:52.5, r:-90, color:'rgba(241,154,190)' },
    { id:'tail-seg-3', kind:'twelfthd', x:30.9, y:52.5, r:90, color:'rgba(241,154,190)' },


   
  ]
};
