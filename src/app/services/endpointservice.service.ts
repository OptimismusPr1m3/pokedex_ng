import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokemon } from '../interfaces/pokemon';

@Injectable({
  providedIn: 'root'
})
export class EndpointserviceService {

  API: string = 'https://pokeapi.co/api/v2/pokemon/'
  pokemon: Pokemon = {}

  /* Globals */
  isBigCard = signal<Boolean>(false);
  currentPokemon = signal<Pokemon | undefined>(this.pokemon)

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
  
  constructor(private http: HttpClient) { }

  getPokemonByName(pokemon: string) {
    this.http.get(`${this.API}${pokemon}`).subscribe({
      next:(data: any) => {
        console.log(data);
      },
      error:(err:any) => {
        console.error('Error fetching Pokemon data:', err)
      },
      complete: () => {console.log('Pokemon data fetch complete')}
    })
  }

  getPokemonList(offset: number = 0, limit: number = 10) {
    this.http.get(`${this.API}?offset=${offset}&limit=${limit}`).subscribe({
      next: (data: any) => {
        console.log(data);
      },
      error: (err: any) => {
        console.error('Error fetching Pokemon list:', err);
      },
      complete: () => { console.log('Pokemon list fetch complete'); }
    });
  }

  returnPokemonList(offset: number = 0, limit: number = 10) {
    return this.http.get(`${this.API}?offset=${offset}&limit=${limit}`);
  }

  returnPokemonByURL(url: string) {
    return this.http.get(url);
  }

  getPokemonById(id: number) {
    this.http.get(`${this.API}${id}`).subscribe({
      next: (data: any) => {
        console.log(data);
      },
      error: (err: any) => {
        console.error('Error fetching Pokemon by ID:', err);
      },
      complete: () => { console.log('Pokemon by ID fetch complete'); }
    });
  }

}
