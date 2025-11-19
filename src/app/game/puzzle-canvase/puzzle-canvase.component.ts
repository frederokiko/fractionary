import { Component, Input } from '@angular/core';
import { PuzzleDefinition } from '../../core/models';
import { GameService } from '../../core/game.service';

@Component({
  selector: 'pb-puzzle-canvase',
  templateUrl: './puzzle-canvase.component.html',
  styleUrls: ['./puzzle-canvase.component.css'],
  standalone: false,  
})
export class PuzzleCanvaseComponent {
  @Input({ required: true }) puzzle!: PuzzleDefinition;
  constructor(public game: GameService) {}
}