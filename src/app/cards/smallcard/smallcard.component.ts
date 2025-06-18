import { Component, input } from '@angular/core';
import { Pokemon } from '../../interfaces/pokemon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-smallcard',
  imports: [CommonModule],
  templateUrl: './smallcard.component.html',
  styleUrl: './smallcard.component.scss',
})
export class SmallcardComponent {
  pokemon = input<Pokemon>();

  ngOnInit() {
    if (this.pokemon()) {
      console.log('Pokemon data received:', this.pokemon());
    }
  }

  capitalizeLetter(str: string | undefined): string | undefined{
    if (str) {
      return str
        .split('-')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
    } else return undefined;
  }
}
