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
  base_hp: number = 0
  description: any[] = []

  constructor(public endpoints: EndpointserviceService) {}

  ngOnInit() {
    if (this.pokemonData()) {
      console.log('Hier das gewählte Pokemon: ', this.pokemonData())
      this.base_hp = this.pokemonData()?.stats?.[0].base_stat
      this.getDescription(this.pokemonData()?.id)
    }
  }

  getDescription(id: number | undefined){
    this.endpoints.getPokemonDescription(id).subscribe({
      next: (data: any) => {
        //console.log('Hier die Data:', data.flavor_text_entries)
        this.description = data.flavor_text_entries
      },
      error: (err) => {console.error(err)},
      complete: () => {console.log('Hier die Data:', this.description[41].flavor_text)}
    })
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
    const primaryColor = this.endpoints.BACKGROUND_COLORS[primaryType] || '#f0f0f0';

    if (types.length === 1) {
      if (!this.endpoints.BACKGROUND_COLORS[primaryType]) {
        console.warn(`No background color defined for type: ${primaryType}`);
      }
      return primaryColor;
    }

    const secondaryType = types[1].type.name.toLowerCase();
    const secondaryColor = this.endpoints.BACKGROUND_COLORS[secondaryType] || '#f0f0f0';

    if (!this.endpoints.BACKGROUND_COLORS[secondaryType]) {
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
