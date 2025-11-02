import { Component, OnInit, ViewChild } from '@angular/core';
import { GameService } from '../../core/game.service';
import { ShapeKind } from '../../core/models';
import { CAT_PUZZLE } from '../../puzzles/cat';
import { ShapeBankComponent } from '../../game/shape-bank/shape-bank.component';
import { BankItem } from '../../game/shape-bank/shape-bank.component';

@Component({
  selector: 'app-kat',
  templateUrl: './kat.component.html',
  styleUrls: ['./kat.component.css'],
  standalone: false,
})
export class KatComponent implements OnInit {

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

  onPickFromBank(key: string) {
    const it = this.items.find(x => x.key === key);
    if (!it) return;
    const result = this.game.tryPlace(this.puzzle, it.kind);
    if (result.ok) this.refreshConsumed();
  }

  get total(): number {
    return this.puzzle.shapes.filter(s => this.game.hasKind(s.kind)).length;
  }
}

