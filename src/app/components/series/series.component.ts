import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SeriesService } from 'src/app/services/series.service';
import { Serie } from '../../models/Series';

@Component({
  selector: 'app-serie',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css'],
})
export class SeriesComponent implements OnInit {
  public series$: Observable<Serie[]>;
  // Observable pour 1 seul série
  public serie$!: Observable<Serie>;
  public loading: boolean;

  // constructor(private http: HttpClient) {
  //   this.loading = true;
  //   this.series$ = this.http.get<Series[]>('http://10.103.0.254:8000/series');
  // }

  constructor(private svc: SeriesService) {
    this.series$ = this.svc.getSeries();
    this.loading = true;
  }

  public afficherSaison(id: any) {
    this.svc.getSaisonById(id);
    // metrte à jour quand je clique
    this.serie$ = this.svc.getSaisons();
  }

  // public afficherSaison(id: any) {
  //   this.serie$ = this.http.get<Series>(
  //     'http://10.103.0.254:8000/api/series/' + id + '.json'
  //   );
  // }

  ngOnInit(): void {}
}
