import { Component, OnInit, ViewChild } from '@angular/core';
import { GameService } from '../../core/game.service';
import { ShapeKind } from '../../core/models';
import { CAT_PUZZLE } from '../../puzzles/cat';
import { ShapeBankComponent } from '../../game/shape-bank/shape-bank.component';
import { BankItem } from '../../game/shape-bank/shape-bank.component';

@Component({
  selector: 'app-kata',
  templateUrl: './kata.component.html',
  styleUrls: ['./kata.component.css'],
  standalone: false,
})
export class KataComponent implements OnInit {

  puzzle = CAT_PUZZLE;

  items: BankItem[] = [];
  requiredByKey: Record<string, number> = {};
  consumedByKey: Record<string, number> = {};

  constructor(public game: GameService) {}

  ngOnInit() {
    this.game.setReference('cat');
    this.game.start(this.puzzle);

    this.items = this.game.getBankGroups(this.puzzle);
    this.requiredByKey = this.game.requiredCountByKey(this.puzzle);
    this.refreshConsumed();
  }

  refreshConsumed() {
    this.consumedByKey = this.game.placedCountByKey(this.puzzle);
  }

  // onPickFromBank(key: string) {
  //   const it = this.items.find(x => x.key === key);
  //   if (!it) return;
  //   const result = this.game.tryPlace(this.puzzle, it.kind);
  //   if (result.ok) this.refreshConsumed();
  // }
onPickFromBank(key: string) {
  const it = this.items.find(x => x.key === key);
  if (!it) return;
  const result = this.game.tryPlace(this.puzzle, it.kind);
  if (result.ok) {
    this.refreshConsumed();
  } else {
    this.shake(); // ← feedback erreur
  }
}
  get total(): number {
    return this.puzzle.shapes.filter(s => this.game.hasKind(s.kind)).length;
  }
   /** Petite animation d’erreur */
   shake() {
    const host = document.querySelector('.board');
    if (!host) return;
    host.classList.remove('shake'); // reset si animation déjà en cours
    // forcer un reflow pour relancer l’anim même si la classe est déjà posée
    // @ts-ignore
    void (host as HTMLElement).offsetWidth;
    host.classList.add('shake');
    setTimeout(() => host.classList.remove('shake'), 400);
  }
}