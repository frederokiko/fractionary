import { Component, OnInit } from '@angular/core';
import { GameService } from '../../core/game.service';
import { Bird_PUZZLE } from '../../puzzles/bird';
import { BankItem } from '../../game/shape-bank/shape-bank.component';

@Component({
  selector: 'app-bird',
  templateUrl: './bird.component.html',
  styleUrls: ['./bird.component.css'],
  standalone: false,
})
export class BirdComponent implements OnInit {
  puzzle = Bird_PUZZLE;

  items: BankItem[] = [];
  requiredByKey: Record<string, number> = {};
  consumedByKey: Record<string, number> = {};

  constructor(public game: GameService) {}

  ngOnInit() {
    this.game.setReference('bird');
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


