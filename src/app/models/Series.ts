import { Saison } from './Saison';

export class Serie {
  private _id: number;
  private _nom: string;
  private _image: string;
  private _saisons: Saison[];

  constructor(id: number, nom: string, image: string, saisons: Saison[]) {
    this._id = id;
    this._nom = nom;
    this._image = image;
    this._saisons = saisons;
  }

  public get id(): number {
    return this._id;
  }

  public set id(value: number) {
    this._id = value;
  }

  public get nom(): string {
    return this._nom;
  }

  public set nom(value: string) {
    this._nom = value;
  }

  public get image(): string {
    return this._image;
  }

  public set image(value: string) {
    this._image = value;
  }

  public get saisons(): Saison[] {
    return this._saisons;
  }

  public set saisons(value: Saison[]) {
    this._saisons = value;
  }
}
