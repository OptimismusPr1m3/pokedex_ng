import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EndpointserviceService {

  API: string = 'https://pokeapi.co/api/v2/pokemon/'

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
