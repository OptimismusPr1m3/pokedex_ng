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

  capitalizeTypes(types: any[] | undefined): string | undefined {
    let typeNames: string | undefined;
    if (!types || types.length === 0) {
      console.warn('No types found for this Pokemon');
      return undefined;
    }
    if (types.length > 0) {
      typeNames = types
        .map(
          (type) =>
            type.type.name.charAt(0).toUpperCase() + type.type.name.slice(1)
        )
        .join('/');
      console.log('Multiple types: ', typeNames);
      return typeNames;
    } else {
      return undefined;
    }
  }

  capitalizeLetter(str: string | undefined): string | undefined {
    if (str) {
      return str
        .split('-')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
    } else return undefined;
  }

  formatID(id: number | undefined): string | undefined {
    if (id) {
      return id.toString().padStart(3, '0');
    } else {
      return undefined;
    }
  }
}
