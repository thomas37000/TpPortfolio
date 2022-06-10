import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DatasService {
  private _http: HttpClient;

  constructor(http: HttpClient) {
    this._http = http;
  }

  getAllPokemons() {
    return this._http.get(`https://pokeapi.co/api/v2/pokemon?limit=20`);
  }

  getAllDatasPokemon(name: string) {
    return this._http.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
  }

  getAbilitiesPokemon(name: string) {
    return this._http.get(`https://pokeapi.co/api/v2/ability/${name}`);
  }

  getPokemonType(pokemon: any): string {
    return pokemon && pokemon.types.length > 0 ? pokemon.types[0].type.name : '';
  }
}