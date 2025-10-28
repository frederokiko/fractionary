import { ReferenceSet } from '../models';

export const BIRD_REFERENCE: ReferenceSet = {
  name: 'bird',
  baseUnitLabel: '1',
  shapes: {
    unit:       { label: '1',    value: 1,      color: '#F7901E', clip: 'hexagon' },
    //half:       { label: '1/2',  value: 0.5,    color: '#1E63D8', clip: 'trapezoid' },
    third:      { label: '1/3',  value: 0.333,  color: '#E53935', clip: 'diamond' },
    //quarterd:   { label: '1/4',  value: 0.25,   color: '#2E7D32', clip: 'trap-right' },
    //quarterg:   { label: '1/4',  value: 0.25,   color: '#388E3C', clip: 'trap-left' },
    //sixth:      { label: '1/6',  value: 0.166,  color: '#FFD54F', clip: 'triangle' },
    //'ninth-top':{ label: '1/9',  value: 0.111,  color: '#6A4CFF', clip: 'triangle' },
    //'ninth-bot':{ label: '1/9',  value: 0.111,  color: '#6A4CFF', clip: 'triangle' },
    //'ninth-mid':{ label: '1/9',  value: 0.111,  color: '#7E57C2', clip: 'parallelogram' },
    twelfthd:   { label: '1/12', value: 0.083,  color: '#67C1E8', clip: 'small-tri-right' },
    twelfthg:   { label: '1/12', value: 0.083,  color: '#4FC3F7', clip: 'small-tri-left' },
    //eighteenth: { label: '1/18', value: 0.055,  color: '#AB47BC', clip: 'thin-para' },
  }
};
