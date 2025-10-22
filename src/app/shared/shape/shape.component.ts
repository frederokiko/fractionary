import { Component, Input } from '@angular/core';
import { ShapeKind } from '../../core/models';

@Component({
  selector: 'pb-shape',
  template: `<div class="shape" [ngClass]="kind"
                 [style.--c]="color"
                 [style.transform]="'rotate(' + (r||0) + 'deg)'"></div>`,
  styleUrls: ['./shape.component.css'],
  standalone: false,
})
export class ShapeComponent {
  @Input() kind!: ShapeKind;
  @Input() color: string = '#ddd';
  @Input() r = 0;
}
