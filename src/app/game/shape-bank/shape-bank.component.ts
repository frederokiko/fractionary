// import { Component, EventEmitter, Input, Output } from '@angular/core';
// import { ShapeKind } from '../../core/models';
// import { GameService } from '../../core/game.service';

// export interface BankItem {
//   key: string;        // ex: "1/4"
//   kind: ShapeKind;    // un kind représentatif (ex: "quarterd")
// }

// @Component({
//   selector: 'pb-shape-bank',
//   templateUrl: './shape-bank.component.html',
//   styleUrls: ['./shape-bank.component.css'],
//   standalone: false,
// })
// export class ShapeBankComponent {
//   @Input({ required: true }) items: BankItem[] = [];
//   @Input() requiredByKey: Record<string, number> = {};
//   @Input() consumedByKey: Record<string, number> = {};
//   @Input() size = 80;

//   @Output() pick = new EventEmitter<string>();

//   constructor(public game: GameService) {}

//   /** <- on ne s’en sert plus pour griser au cas par cas
//   isDone(key: string): boolean {
//     const req = this.requiredByKey[key] ?? 0;
//     const got = this.consumedByKey[key] ?? 0;
//     return got >= req && req > 0;
//   }
//   */

//   /** ✅ Nouveau : terminé = tout le puzzle est fini */
//   isAllDone(): boolean {
//     // au choix : on se base sur l'état du jeu
//     if (this.game.state === 'win') return true;

//     // ou on vérifie que tout est placé
//     const totalReq = Object.values(this.requiredByKey).reduce((a, b) => a + b, 0);
//     const totalGot = Object.values(this.consumedByKey).reduce((a, b) => a + b, 0);
//     return totalReq > 0 && totalGot >= totalReq;
//   }

//   colorOf(item: BankItem): string {
//     return this.isAllDone() ? '#bdbdbd' : this.game.getColor(item.kind);
//   }

//   onPick(key: string) {
//     if (this.isAllDone()) return; // plus cliquable quand tout est fini
//     this.pick.emit(key);
//   }

//   trackByKey(_: number, it: BankItem) { return it.key; }
// }


import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ShapeKind } from '../../core/models';
import { GameService } from '../../core/game.service';

export interface BankItem {
  key: string;        // ex: "1/4"
  kind: ShapeKind;
}

@Component({
  selector: 'pb-shape-bank',
  templateUrl: './shape-bank.component.html',
  styleUrls: ['./shape-bank.component.css'],
  standalone: false,
})
export class ShapeBankComponent {
  @Input({ required: true }) items: BankItem[] = [];
  @Input() requiredByKey: Record<string, number> = {};
  @Input() consumedByKey: Record<string, number> = {};
  @Input() size = 80;

  /** ✅ clé sur laquelle il y a eu une erreur, pour afficher la croix */
  @Input() errorKey: string | null = null;

  @Output() pick = new EventEmitter<string>();

  constructor(public game: GameService) {}

  isAllDone(): boolean {
    if (this.game.state === 'win') return true;
    const totalReq = Object.values(this.requiredByKey).reduce((a, b) => a + b, 0);
    const totalGot = Object.values(this.consumedByKey).reduce((a, b) => a + b, 0);
    return totalReq > 0 && totalGot >= totalReq;
  }

  colorOf(item: BankItem): string {
    return this.isAllDone() ? '#bdbdbd' : this.game.getColor(item.kind);
  }

  onPick(key: string) {
    if (this.isAllDone()) return;
    this.pick.emit(key);
  }

  trackByKey(_: number, it: BankItem) { return it.key; }
}

