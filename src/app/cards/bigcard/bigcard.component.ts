import { Component, input } from '@angular/core';
import { Pokemon } from '../../interfaces/pokemon';
import { EndpointserviceService } from '../../services/endpointservice.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-bigcard',
  imports: [CommonModule],
  templateUrl: './bigcard.component.html',
  styleUrl: './bigcard.component.scss'
})
export class BigcardComponent {

  pokemonData = input<Pokemon>();

  constructor(public globals: EndpointserviceService) {}

  ngOnInit() {
    if (this.pokemonData()) {
      console.log('Hier das gewählte Pokemon: ', this.pokemonData())
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

  setBackgroundColor(types: any[] | undefined): string | undefined {
    if (!types) {
      console.warn('No types found for this Pokemon');
      return '#f0f0f0';
    }

    const primaryType = types[0].type.name.toLowerCase();
    const primaryColor = this.globals.BACKGROUND_COLORS[primaryType] || '#f0f0f0';

    if (types.length === 1) {
      if (!this.globals.BACKGROUND_COLORS[primaryType]) {
        console.warn(`No background color defined for type: ${primaryType}`);
      }
      return primaryColor;
    }

    const secondaryType = types[1].type.name.toLowerCase();
    const secondaryColor = this.globals.BACKGROUND_COLORS[secondaryType] || '#f0f0f0';

    if (!this.globals.BACKGROUND_COLORS[secondaryType]) {
      console.warn(`No background color defined for type: ${secondaryType}`);
    }

    return `linear-gradient(45deg, ${primaryColor}, ${secondaryColor})`;
  }

    formatID(id: number | undefined): string | undefined {
    if (id) {
      return id.toString().padStart(3, '0');
    } else {
      return undefined;
    }
  }


}
