import { ReferenceSet } from '../models';

export const CAT_REFERENCE: ReferenceSet = {
  name: 'cat',
  baseUnitLabel: '1',
  shapes: {
    unit:       { label: '1',    value: 1,      color: 'rgb(239,154,72)', clip: 'hexagon' },
    half:       { label: '1/2',  value: 0.5,    color: 'rgb(0,70,142)', clip: 'trapezoid' },
    //third:      { label: '1/3',  value: 0.333,  color: '#E53935', clip: 'diamond' },
    //quarterd:   { label: '1/4',  value: 0.25,   color: '#2E7D32', clip: 'trap-right' },
    //quarterg:   { label: '1/4',  value: 0.25,   color: '#388E3C', clip: 'trap-left' },
    //sixth:      { label: '1/6',  value: 0.166,  color: '#FFD54F', clip: 'triangle' },
    'ninth-top':{ label: '1/9',  value: 0.111,  color: 'rgb(122,64,118)', clip: 'triangle' },
    //'ninth-bot':{ label: '1/9',  value: 0.111,  color: 'rgb(122,64,118)', clip: 'triangle' },
    'ninth-mid':{ label: '1/9',  value: 0.111,  color: 'rgb(122,64,118)', clip: 'parallelogram' },
    twelfthg:   { label: '1/12', value: 0.083,  color: 'rgb(241,154,190)', clip: 'small-tri-left' },
    twelfthd:   { label: '1/12', value: 0.083,  color: 'rgb(241,154,190)', clip: 'small-tri-right' },
    
    //eighteenth: { label: '1/18', value: 0.055,  color: '#AB47BC', clip: 'thin-para' },
  }
};
