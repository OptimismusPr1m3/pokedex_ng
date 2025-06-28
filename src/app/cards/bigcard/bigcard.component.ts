import { Component, input } from '@angular/core';
import { Pokemon } from '../../interfaces/pokemon';

@Component({
  selector: 'app-bigcard',
  imports: [],
  templateUrl: './bigcard.component.html',
  styleUrl: './bigcard.component.scss'
})
export class BigcardComponent {

  pokemonData = input<Pokemon>();

  constructor() {}

  ngOnInit() {
    if (this.pokemonData()) {
      console.log('Hier das gewählte Pokemon: ', this.pokemonData())
    }
  }

}
