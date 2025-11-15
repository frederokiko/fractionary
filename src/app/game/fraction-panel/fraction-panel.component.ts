import { Component } from '@angular/core';
import { GameService } from '../../core/game.service';

@Component({
  selector: 'pb-fraction-panel',
  templateUrl: `./fraction-panel.component.html`,     
  styleUrls: ['./fraction-panel.component.css'],

  standalone: false,
})
export class FractionPanelComponent {
  constructor(public game: GameService) {}

  // chemin correct (sans "./", avec l’extension qui existe)
  cardSrc = 'assets/images/carte.jpg';

  toText(k: string): string {
    switch (k) {
      case 'unit': return '1/1';
      case 'half': return '1/2';
      case 'third': return '1/3';
      case 'quarterd':
      case 'quarterg': return '1/4';
      case 'sixth': return '1/6';
      case 'twelfthd':
      case 'twelfthg': return '1/12';
      case 'eighteenth': return '1/18';
      case 'ninth-top':
      case 'ninth-mid': return '1/9';
      default: return k;
    }
  }
  numerator(k: string) { return this.toText(k).split('/')[0] ?? ''; }
  denominator(k: string) { return this.toText(k).split('/')[1] ?? ''; }

colorFor(k: string): string {
  const map: Record<string, string> = {
    '1/1':'#EB8F2D', '1/2':'#0D47A1', '1/3':'#D32F2F',
    quarterd:'#0D47A1', quarterg:'#0D47A1', sixth:'#0D47A1',
    '1/12':'#F48FB1', twelfthg:'#F48FB1',
    '1/9':'#5C2D91', 'ninth-mid':'#5C2D91',
    eighteenth:'#5C2D91',
  };
  return map[k] ?? '#000';  // couleur par défaut
}
  }



