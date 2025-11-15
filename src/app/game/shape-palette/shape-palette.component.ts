// import { Component, EventEmitter, Output } from '@angular/core';
// import { ShapeKind } from '../../core/models';

// @Component({
//   selector: 'pb-shape-palette',
//   template: `
//   <div class="palette">
//     <button *ngFor="let k of kinds" (click)="pick(k)">
//       <pb-shape [kind]="k" [color]="sampleColor(k)"></pb-shape>
//       <small>{{label(k)}}</small>
//        <!-- ceci affiche les fractions sous la forme dans le referenciel  -->
//     </button>
//   </div>`,
//   styleUrls: ['./shape-palette.component.css'],
//   standalone: false,
// })
// export class ShapePaletteComponent {
//   @Output() choose = new EventEmitter<ShapeKind>();
//    kinds: ShapeKind[] = [
//     'unit','half','third','quarterd','quarterg','sixth',
//     'ninth-top','ninth-mid','ninth-bot','twelfthd','twelfthg','eighteenth'
//   ];

//   pick(k: ShapeKind) { this.choose.emit(k); }

//   label(k: ShapeKind) {
//     const labels: Record<ShapeKind, string> = {
//       'unit':'1-ok',
//       'half':'1/2-ok',
//       'third':'1/3-ok',
//       'quarterd':'1/4-ok',
//       'quarterg':'1/4-ok',
//       'sixth':'1/6-ok',
//       'ninth-top':'1/9',
//       'ninth-mid':'1/9',
//       'ninth-bot':'1/9',
//       'twelfthd':'1/12',
//       'twelfthg':'1/12',
//       'eighteenth':'1/18',
//     };
//     return labels[k];
//   }

//   sampleColor(k: ShapeKind) {
//     const colors: Record<ShapeKind, string> = {
//       'unit':'rgba(239,154,72,1)',
//       'half':'rgb(0,70,142)',
//       'third':'rgb(218,37,29)',
//       'quarterd':'rgb(218,37,29)',
//       'quarterg':'rgb(218,37,29)',
//       'sixth':'rgb(255,245,0)',
//       'ninth-top':'rgb(122,64,118)',
//       'ninth-mid':'rgb(122,64,118)',
//       'ninth-bot':'rgb(122,64,118)',
//       'twelfthd':'rgb(241,154,190)',
//       'twelfthg':'rgb(241,154,190)',
//       'eighteenth':'rgb(122,64,118)'
//     };
//     return colors[k];
//   }
// }



import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ShapeKind } from '../../core/models';
import { GameService } from '../../core/game.service';

@Component({
  selector: 'pb-shape-palette',
  template: `
  <div class="palette">
    <button *ngFor="let k of list" (click)="pick(k)">
      <pb-shape [kind]="k" [color]="game.getColor(k)"></pb-shape>
      <small>{{ game.getFractionLabel(k) }}</small>
      <!-- libellé/ couleur viennent du référentiel actif -->
    </button>
  </div>`,
  styleUrls: ['./shape-palette.component.css'],
  standalone: false,
})
export class ShapePaletteComponent implements OnInit {
  @Input() animal: 'cat' | 'bird' = 'cat';
  @Input() readonly = false;
  @Output() choose = new EventEmitter<ShapeKind>();
  kinds: ShapeKind[] = [];
  list: ShapeKind[] = [];
  constructor(public game: GameService) {}

  ngOnInit() {
    this.game.setReference(this.animal);
    this.kinds = this.game.getPaletteKinds(); 
    if (this.animal === 'bird') {
      this.list = ['unit','third','twelfthd'];
    } else{
      this.list =['unit','half','ninth-mid','twelfthd'];
    }// ← la liste vient du référentiel
  }

 // pick(k: ShapeKind) { this.choose.emit(k); }
 pick(k: ShapeKind){ if(!this.readonly) this.choose.emit(k); }
}

