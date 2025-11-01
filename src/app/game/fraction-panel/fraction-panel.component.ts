// import { Component } from '@angular/core';
// import { GameService } from '../../core/game.service';

// @Component({
//   selector: 'pb-fraction-panel',
//   template: `
//     <div *ngIf="game.state!=='win'; else gg">
//       <strong>Fraction : </strong>
//       <span class="frac" *ngIf="game.currentFraction as k">{{ toText(k) }}</span>
//     </div>
//     <ng-template #gg>
//       <div class="win">Bravo !</div>
//     </ng-template>
//   `,
//   styles: [`
//     .frac { font-size: 20px; }
//     .win { font-weight: 700; }
//   `],
//   standalone: false,
// })
// export class FractionPanelComponent {
//   constructor(public game: GameService){}
//   toText(k: string): string {
//     switch (k) {
//       case 'unit': return '1/1';
//       case 'half': return '1/2';
//       case 'third': return '1/3';
//       case 'quarterd': return '1/4';
//       case 'quarterg': return '1/4';
//       case 'sixth': return '1/6';
//       case 'twelfthd': return '1/12';
//       case 'twelfthg': return '1/12';
//       case 'eighteenth': return '1/18';
//       case 'ninth-top': return '1/9';
//       case 'ninth-mid': return '1/9';
//       default: return k;
//     }
//   }
// }




import { Component } from '@angular/core';
import { GameService } from '../../core/game.service';

@Component({
  selector: 'pb-fraction-panel',
  template: `
    <ng-container *ngIf="game.state !== 'win'; else gg">
      <div class="fraction-card" *ngIf="game.currentFraction as k" [style.--accent]="colorFor(k)">
        <div class="figure">
          <img [src]="cardSrc" alt="Carte fraction" />
          <span class="num">{{ numerator(k) }}</span>
          <span class="den">{{ denominator(k) }}</span>
        </div>
      </div>
    </ng-container>

    <ng-template #gg>
      <div class="win">Bravo !</div>
    </ng-template>
  `,
  styles: [`
    .win { font-weight: 700; }

    .fraction-card {
      /* conteneur de la carte */
      display: inline-block;
      padding: 8px 10px;
      border-radius: 10px;
      background: #fff;
      box-shadow: 0 6px 16px rgba(0,0,0,.12);
    }

    .figure {
      position: relative;
      width: 110px;
      height: 140px;
    }
     // dimensions de l’image
    .figure img {
      display: block;
      width: 100%;
      height: auto;
      user-select: none;
      pointer-events: none;
    }

    .num{
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      font-size: 55px;
      font-weight: 700;
      line-height: 1;
      color: #f3f3f3ff;
      text-shadow: 0 1px 0 #680404a0;
  
    }
    .num { top: 12%; }
    


      .den {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      font-size: 30px;
      font-weight: 700;
      line-height: 1;
      color: #e2d40aff;
      text-shadow: 0 1px 0 #ffffffa0;
    }

    .den { bottom: 8%; }
  `],
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
      unit:'#EB8F2D', half:'#0D47A1', third:'#0D47A1',
      quarterd:'#0D47A1', quarterg:'#0D47A1', sixth:'#0D47A1',
      twelfthd:'#F48FB1', twelfthg:'#F48FB1',
      'ninth-top':'#5C2D91', 'ninth-mid':'#5C2D91',
      eighteenth:'#5C2D91',
    };
    return map[k] ?? '#333';
  }
}


