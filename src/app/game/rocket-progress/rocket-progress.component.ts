import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'pb-rocket-progress',
  templateUrl: './rocket-progress.component.html',
  styleUrls: ['./rocket-progress.component.css'],
  standalone: false,
})
export class RocketProgressComponent implements OnChanges {
  @Input() total = 1;     // nb de pièces à placer
  @Input() current = 0;   // nb déjà placées

  steps: number[] = [];
  percent = 0;            // 0 → bas, 1 → haut
  rocketSize = 150; // augmente ici (200, 250, 300...)
  rocketOffset = 150; // pour ajuster verticalement si besoin

  ngOnChanges() {
     this.steps = Array.from({ length: this.total }, (_, i) => i + 1);
     this.percent = this.total ? Math.min(1, this.current / this.total) : 0;
  }
}
