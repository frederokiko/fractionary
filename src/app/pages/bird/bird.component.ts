import { Component } from '@angular/core';
import { Bird_PUZZLE } from '../../puzzles/bird';
import { GameService } from '../../core/game.service';
import { ShapeKind } from '../../core/models';
@Component({
  selector: 'app-bird',
  standalone: false,
  templateUrl: './bird.component.html',
  styleUrl: './bird.component.css'
})
export class BirdComponent {
  puzzle = Bird_PUZZLE;
  constructor(public game: GameService) {}
  //ngOnInit() { this.game.start(this.puzzle); }  
ngOnInit() {
  this.game.setReference('bird');
  this.game.start(this.puzzle);
}
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
