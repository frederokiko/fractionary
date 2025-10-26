import { Component, EventEmitter, Output } from '@angular/core';
import { ShapeKind } from '../../core/models';

@Component({
  selector: 'pb-shape-palette',
  template: `
  <div class="palette">
    <button *ngFor="let k of kinds" (click)="pick(k)">
      <pb-shape [kind]="k" [color]="sampleColor(k)"></pb-shape>
      <small>{{label(k)}}</small>
       <!-- ceci affiche les fractions sous la forme dans le referenciel  -->
    </button>
  </div>`,
  styleUrls: ['./shape-palette.component.css'],
  standalone: false,
})
export class ShapePaletteComponent {
  @Output() choose = new EventEmitter<ShapeKind>();
  kinds: ShapeKind[] = ['unit','half','third','quarterd','quarterg','sixth','edge','twelfthd','twelfthg','eighteenth'];

  pick(k: ShapeKind) { this.choose.emit(k); }

  label(k: ShapeKind) {
    // ici, on affiche les fractions sous forme de texte dans le référentiel
    return {unit:'1-ok', half:'1/2-ok', third:'1/3-ok',quarterd:'1/4-ok',quarterg:'1/4-ok', sixth:'1/6-ok', twelfthd:'1/12',twelfthg:'1/12', edge:'1/9',eighteenth:'1/18'}[k] || k;
  }

sampleColor(k: ShapeKind) {
  return {
    unit:'rgba(239, 154, 72)', half:'rgb(0, 70, 142)', third:'rgb(218, 37, 29)',quarterd:'rgb(218, 37, 29)',
    quarterg:'rgb(218, 37, 29)', sixth:'rgb(255, 245, 0)', twelfthd:'rgb(241, 154, 190)',twelfthg:'rgb(241, 154, 190)', edge:'rgb(122, 64, 118)',eighteenth:'rgb(122, 64, 118)'
  }[k] || '#ddd';
}
}
