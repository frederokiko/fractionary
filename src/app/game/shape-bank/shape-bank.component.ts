import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ShapeKind } from '../../core/models';
import { GameService } from '../../core/game.service';

export interface BankItem {
  key: string;        // ex: "1/4"
  kind: ShapeKind;    // un kind représentatif (ex: "quarterd")
}

@Component({
  selector: 'pb-shape-bank',
  templateUrl: './shape-bank.component.html',
  styleUrls: ['./shape-bank.component.css'],
  standalone: false,
})
export class ShapeBankComponent {
  @Input({ required: true }) items: BankItem[] = [];      // ← une tuile par fraction
  @Input() requiredByKey: Record<string, number> = {};    // combien nécessaires
  @Input() consumedByKey: Record<string, number> = {};    // combien déjà placées
  @Input() size = 80;                                     // taille des tuiles

  @Output() pick = new EventEmitter<string>();            // KEY envoyée (ex: "1/6")

  constructor(public game: GameService) {}

  isDone(key: string): boolean {
    const req = this.requiredByKey[key] ?? 0;
    const done = this.consumedByKey[key] ?? 0;
    return done >= req && req > 0;
  }

  colorOf(item: BankItem): string {
    return this.isDone(item.key) ? '#bdbdbd' : this.game.getColor(item.kind);
  }

  onPick(key: string) {
    if (!this.isDone(key)) {
      this.pick.emit(key);
    }
  }

  trackByKey(_: number, it: BankItem) {
    return it.key;
  }
}



