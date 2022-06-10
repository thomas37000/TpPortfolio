import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cocktail } from '../models/Cocktail';

@Injectable({
  providedIn: 'root',
})
export class CocktailService {
  public cocktails$: Observable<Cocktail[]>;
  public cocktail$!: Observable<Cocktail>;

  private _http: HttpClient;

  constructor(http: HttpClient) {
    this._http = http;
    this.cocktails$ = this._http.get<Cocktail[]>('');
  }

  // public getCocktails(): Observable<Cocktail[]>{
  //   return this.cocktails$;
  // }

  public getCocktails(name: string) {
    return this._http.get(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`
    );
  }
}
