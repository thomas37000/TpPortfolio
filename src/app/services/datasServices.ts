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

  getGenerationsPokemon(name: string) {
    return this._http.get(`https://pokeapi.co/api/v2/ability/${name}`);
  }
}