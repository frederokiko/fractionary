import { Component, OnInit } from '@angular/core';
import { CAT_PUZZLE } from '../../puzzles/cat';
import { GameService } from '../../core/game.service';
import { ShapeKind } from '../../core/models';

@Component({
  selector: 'app-kat',
  templateUrl: './kat.component.html',
  styleUrls: ['./kat.component.css'],
  standalone: false,
})
export class KatComponent implements OnInit {
  puzzle = CAT_PUZZLE;
  constructor(public game: GameService) {}
  ngOnInit() { this.game.start(this.puzzle); }   // montre 3s puis blanc

  onChoose(kind: ShapeKind) {
    const { ok } = this.game.tryPlace(this.puzzle, kind);
    // Si erreur => petite animation
    if (!ok) this.shake();
  }

  shake() {
    const root = document.querySelector('.game-wrap');
    if (!root) return;
    root.classList.add('shake');
    setTimeout(()=>root.classList.remove('shake'), 400);
  }
}
