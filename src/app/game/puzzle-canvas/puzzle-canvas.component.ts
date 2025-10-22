import { Component, Input } from '@angular/core';
import { PuzzleDefinition } from '../../core/models';
import { GameService } from '../../core/game.service';

@Component({
  selector: 'pb-puzzle-canvas',
  templateUrl: './puzzle-canvas.component.html',
  styleUrls: ['./puzzle-canvas.component.css'],
  standalone: false,  
})
export class PuzzleCanvasComponent {
  @Input({ required: true }) puzzle!: PuzzleDefinition;
  constructor(public game: GameService) {}
}

