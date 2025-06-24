import { Component, input } from '@angular/core';
import { Pokemon } from '../../interfaces/pokemon';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { EndpointserviceService } from '../../services/endpointservice.service';

@Component({
  selector: 'app-smallcard',
  imports: [CommonModule],
  templateUrl: './smallcard.component.html',
  styleUrl: './smallcard.component.scss',
})
export class SmallcardComponent {
  pokemon = input<Pokemon>();

  BACKGROUND_COLORS: { [key: string]: string } = {
    fire: '#ff5733', // Lebendiges Korallenrot für Feuer
    water: '#00aaff', // Frisches Türkisblau für Wasser
    grass: '#00cc66', // Saftiges Grün für Pflanze
    electric: '#ffea00', // Knalliges Neon-Gelb für Elektro
    psychic: '#ff3399', // Vibrantes Pink für Psycho
    ice: '#66e6ff', // Kühles Cyan für Eis
    dragon: '#7b4dff', // Mystisches Violett für Drache
    normal: '#d9d9d9', // Helles, cleanes Grau für Normal
    fighting: '#ff8c1a', // Energetisches Orange für Kampf
    flying: '#99ccff', // Leichtes Himmelblau für Flug
    poison: '#b833ff', // Giftiges Neon-Lila für Gift
    ground: '#e6b800', // Warmes Goldbraun für Boden
    rock: '#8c6b33', // Robuster Bronzeton für Gestein
    bug: '#aaff33', // Frisches Limettengrün für Käfer
    ghost: '#6b33cc', // Tiefes, mysteriöses Indigo für Geist
    steel: '#b3b3cc', // Schimmerndes Silbergrau für Stahl
    dark: '#4d4d4d', // Dunkles, edles Anthrazit für Unlicht
    fairy: '#ff99e6', // Zuckersüßes Rosa für Fee
  };

  constructor(public endpoints: EndpointserviceService) {}

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
      //console.log('Multiple types: ', typeNames);
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

  setBackgroundColor(types: any[] | undefined): string | undefined {
    if (!types) {
      console.warn('No types found for this Pokemon');
      return '#f0f0f0';
    }

    const primaryType = types[0].type.name.toLowerCase();
    const primaryColor = this.BACKGROUND_COLORS[primaryType] || '#f0f0f0';

    if (types.length === 1) {
      if (!this.BACKGROUND_COLORS[primaryType]) {
        console.warn(`No background color defined for type: ${primaryType}`);
      }
      return primaryColor;
    }

    const secondaryType = types[1].type.name.toLowerCase();
    const secondaryColor = this.BACKGROUND_COLORS[secondaryType] || '#f0f0f0';

    if (!this.BACKGROUND_COLORS[secondaryType]) {
      console.warn(`No background color defined for type: ${secondaryType}`);
    }

    return `linear-gradient(45deg, ${primaryColor}, ${secondaryColor})`;
  }

  openPokemon() {
    if (this.pokemon()) {
      this.endpoints.currentPokemon.set(this.pokemon())
    }
    
    this.endpoints.isBigCard.set(true)
    console.log('Hier das Pokemon was gewählt wurde: ', this.endpoints.currentPokemon())
  }

}
