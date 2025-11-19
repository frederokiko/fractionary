import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ShapeKind } from '../../core/models';
import { GameService } from '../../core/game.service';

@Component({
  selector: 'pb-shape-palette-b',
  template: `
  <div class="palette">
    <button *ngFor="let k of list ; let i = index"(click)="pick(k)">
      <div class="content">
      <pb-shape [kind]="k" [color]="game.getColor(k)"></pb-shape>
      <img class="palette-img" [src]="images[i]" [alt]="k" />
      </div>
      <small>{{ game.getFractionLabel(k) }}</small>
      <!-- libellé/ couleur viennent du référentiel actif -->
    </button>
  </div>`,
  styleUrls: ['./shape-palette-b.component.css'],
  standalone: false,
})
export class ShapePaletteBComponent implements OnInit {
  @Input() animal: 'cat' | 'bird' = 'cat';
  @Input() readonly = false;
  @Output() choose = new EventEmitter<ShapeKind>();
  kinds: ShapeKind[] = [];
  list: ShapeKind[] = [];
  images: string[] = [];
  constructor(public game: GameService) {}

  ngOnInit() {
    this.game.setReference(this.animal);
    this.kinds = this.game.getPaletteKinds(); 
    if (this.animal === 'bird') {
      this.list = ['unit','third','twelfthd'];
      this.images = ['assets/images/1_1.PNG','assets/images/1_3.PNG','assets/images/1_12.PNG'];
    } else{
      this.list =['unit','half','ninth-mid','twelfthd'];
      this.images = ['assets/images/1_1.PNG','assets/images/1_2.PNG','assets/images/1_9.PNG','assets/images/1_12.PNG'];
    }// ← la liste vient du référentiel
  }

 // pick(k: ShapeKind) { this.choose.emit(k); }
 pick(k: ShapeKind){ if(!this.readonly) this.choose.emit(k); }
}
