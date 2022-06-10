import { Ability } from './Abilitiy';
import { Generation } from './Generation';
import { Type } from './Type';

export class PokemonModel {
  private _id: number;
  private _nom: string;
  private _categorie: string;
  private _type: Type[];
  private _taille: number;
  private _poids: number;
  private _image: string;
  private _generation: Generation | undefined;
  private _ability: Ability[];

  constructor(
    id: number,
    nom: string,
    categorie: string,
    type: Type[],
    taille: number,
    poids: number,
    ability: Ability[]
  ) {
    this._id = id;
    this._nom = nom;
    this._categorie = categorie;
    this._type = type;
    this._taille = taille;
    this._poids = poids;
    this._ability = ability;
    //  avec cette url plus besoin de mettre chaque fois dans le pokemon service l'url de chacun
    this._image =
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' +
      id +
      '.png';
  }

  get id(): number {
    return this._id;
  }

  get nom(): string {
    return this._nom;
  }

  set nom(value: string) {
    this._nom = value;
  }

  get categorie(): string {
    return this._categorie;
  }

  set categorie(value: string) {
    this._categorie = value;
  }

  get type(): Type[] {
    return this._type;
  }

  set type(value: Type[]) {
    this._type = value;
  }

  get taille(): number {
    return this._taille;
  }

  set taille(value: number) {
    this._taille = value;
  }

  get poids(): number {
    return this._poids;
  }

  set poids(value: number) {
    this._poids = value;
  }

  get image(): string {
    return this._image;
  }

  set image(value: string) {
    this._image = value;
  }

  get generation(): Generation {
    return <Generation>this._generation;
  }

  set generation(value: Generation) {
    this._generation = value;
  }

  get ability(): Ability[] {
    return this._ability;
  }

  set ability(value: Ability[]) {
    this._ability = value;
  }
}
