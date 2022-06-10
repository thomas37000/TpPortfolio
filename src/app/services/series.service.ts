import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Serie } from '../models/Series';


@Injectable({
  providedIn: 'root',
})
export class SeriesService {
  public series$: Observable<Serie[]>;
  public serie$!: Observable<Serie>;

  private _http: HttpClient;

  constructor(http: HttpClient) {
    this._http = http;
    this.series$ = this._http.get<Serie[]>(
      'http://10.103.0.254:8000/api/series.json'
    );
  }

  //construire les saisons selon l'id
  public getSaisonById(id: number): void {
    this.serie$ = this._http.get<Serie>(
      'http://10.103.0.254:8000/api/series/' + id + '.json'
    );
  }

  public getSeries(): Observable<Serie[]> {
    return this.series$;
  }

  public getSaisons(): Observable<Serie> {
    return this.serie$;
  }
}
