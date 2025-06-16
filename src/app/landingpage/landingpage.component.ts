import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { EndpointserviceService } from '../services/endpointservice.service';
import { HeaderComponent } from "../shared/header/header.component";
import { CommonModule } from '@angular/common';
import { Pokemon } from '../interfaces/pokemon';

@Component({
  selector: 'app-landingpage',
  imports: [MatIconModule, HeaderComponent, CommonModule],
  templateUrl: './landingpage.component.html',
  styleUrl: './landingpage.component.scss'
})
export class LandingpageComponent {

  pokemonList: Pokemon[] = [];
  pokemonDetails: Pokemon[] = [];

  constructor(public endpoint: EndpointserviceService) { 
    
  }

  ngOnInit() {
    this.endpoint.returnPokemonList(50, 5).subscribe({
      next: (data: any) => {
        this.pokemonList = data.results;
        console.log('Pokemon list fetched:', this.pokemonList);
      },
      error: (err: any) => {
        console.error('Error fetching Pokemon list:', err);
      },
      complete: () => { console.log('Pokemon list fetch complete')
      this.fetchPokemonByURL()  
      ; }
    })
  }

  fetchPokemonByURL() {
    this.pokemonList.forEach(pkmn => {
      if (pkmn.url) {
        this.endpoint.returnPokemonByURL(pkmn.url).subscribe({
          next: (data: Pokemon) => {
            this.pokemonDetails.push(data);
            console.log('Pokemon details fetched:', data);
          }
        })
      }
    });
    console.warn('!!!!!!!!!!!!All Pokemon details fetched:', this.pokemonDetails);
  }

}
