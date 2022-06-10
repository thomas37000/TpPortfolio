import { Personne } from './Personne';

export class Message {
  private _auteur: Personne;
  private _date: Date;
  private _corps: string;

  constructor(auteur: Personne, corps: string) {
    this._auteur = auteur;
    this._date = new Date();
    this._corps = corps;
  }

  get auteur(): Personne {
    return this._auteur;
  }

  set auteur(value: Personne) {
    this._auteur = value;
  }
  get date(): Date {
    return this._date;
  }

  set date(value: Date) {
    this._date = value;
  }

  get corps(): string {
    return this._corps;
  }

  set corps(value: string) {
    this._corps = value;
  }
}
