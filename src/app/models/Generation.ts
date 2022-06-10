import { PokemonModel } from "./PokemonModel";

export class Generation {

  private _id: number;
  private _nom: string;
  private _pokemons: PokemonModel[];

  constructor(id: number, nom: string) {
    this._id = id;
    this._nom = nom;
    this._pokemons = [];
  }

  public addPokemon(pokemon: PokemonModel) {
    this._pokemons.push(pokemon);
  }

  get id (): number {
    return this._id;
  }

  get nom(): string {
    return this._nom;
  }

  set nom(value: string) {
    this._nom = value;
  }


  get pokemons(): PokemonModel[] {
    return this._pokemons;
  }

  set pokemons(value: PokemonModel[]) {
    this._pokemons = value;
  }
}