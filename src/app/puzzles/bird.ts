import { PuzzleDefinition } from '../core/models';

export const Bird_PUZZLE: PuzzleDefinition = {
  name: 'bird',
  unitLabel: '1',
  shapes: [
    // tête
    //hexagone de tête
    { id:'head-hex', kind:'unit', x:57, y:51.6, r:91, color:'#f7901e' },
    // bec = triangle 1/12
    { id:'beak-tri-1', kind:'twelfthg', x:67.7, y:48.2, r:210, color:'rgba(241,154,190)' },
    // corps (ex., 2 hexagones)
// hexagone corps
    { id:'body-hex-1', kind:'unit', x:47.7, y:58.4, r:91, color:'#f7901e' },
    // ailes = segments 1/3
    { id:'test-rh-1', kind:'third', x:44.9, y:65, r:150, color:'rgba(218,39,29)' },
    { id:'test-rh-2', kind:'third', x:44.9, y:51.3, r:31, color:'rgba(218,39,29)' },
    // queue = 3*1/12 segments
    { id:'tail-seg-1', kind:'twelfthd', x:41.9, y:55.3, r:240, color:'rgba(241,154,190)' },
    { id:'tail-seg-2', kind:'twelfthd', x:36.5, y:59.5, r:60, color:'rgba(241,154,190)' },
    { id:'tail-seg-3', kind:'twelfthd', x:41.9, y:59.5, r:240, color:'rgba(241,154,190)' },
   
  ]
};
