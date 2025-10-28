import { Component } from '@angular/core';
import { GameService } from '../../core/game.service';

@Component({
  selector: 'pb-fraction-panel',
  template: `
    <div *ngIf="game.state!=='win'; else gg">
      <strong>Fraction : </strong>
      <span class="frac" *ngIf="game.currentFraction as k">{{ toText(k) }}</span>
    </div>
    <ng-template #gg>
      <div class="win">Bravo !</div>
    </ng-template>
  `,
  styles: [`
    .frac { font-size: 20px; }
    .win { font-weight: 700; }
  `],
  standalone: false,
})
export class FractionPanelComponent {
  constructor(public game: GameService){}
  toText(k: string) {
    switch (k) {
      case 'unit': return '1';
      case 'half': return '1/2';
      case 'third': return '1/3';
      case 'quarterd': return '1/4';
      case 'quarterg': return '1/4';
      case 'sixth': return '1/6';
      case 'twelfthd': return '1/12';
      case 'twelfthg': return '1/12';
      case 'eighteenth': return '1/18';
      case 'ninth-top': return '1/9';
      case 'ninth-mid': return '1/9';
      default: return k;
    }
  }
}
