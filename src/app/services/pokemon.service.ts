import { Injectable } from '@angular/core';
import { PokemonModel } from '../models/PokemonModel';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  public pokemons!: PokemonModel[];

  constructor() {
    
  }

  public getPokemons(): PokemonModel[] {
    return this.pokemons;
  }
}