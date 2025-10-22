import { Component, EventEmitter, Output } from '@angular/core';
import { ShapeKind } from '../../core/models';

@Component({
  selector: 'pb-shape-palette',
  template: `
  <div class="palette">
    <button *ngFor="let k of kinds" (click)="pick(k)">
      <pb-shape [kind]="k" [color]="sampleColor(k)"></pb-shape>
      <small>{{label(k)}}</small>
    </button>
  </div>`,
  styleUrls: ['./shape-palette.component.css'],
  standalone: false,
})
export class ShapePaletteComponent {
  @Output() choose = new EventEmitter<ShapeKind>();
  kinds: ShapeKind[] = ['unit','half','third','sixth','edge','twelfth'];

  pick(k: ShapeKind) { this.choose.emit(k); }

  label(k: ShapeKind) {
    return {unit:'1', half:'1/2', third:'1/3', sixth:'1/6', twelfth:'1/12', edge:'1/9'}[k] || k;
  }

sampleColor(k: ShapeKind) {
  return {
    unit:'rgba(239, 154, 72)', half:'rgb(0, 70, 142)', third:'rgb(218, 37, 29)', sixth:'rgb(255, 245, 0)', twelfth:'rgb(241, 154, 190)', edge:'rgb(122, 64, 118)'
  }[k] || '#ddd';
}
}
