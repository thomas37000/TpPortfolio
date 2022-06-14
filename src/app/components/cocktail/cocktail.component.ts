import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Cocktail } from '../../models/Cocktail';
import { CocktailService } from '../../services/cocktail.service';

@Component({
  selector: 'app-cocktail',
  templateUrl: './cocktail.component.html',
  styleUrls: ['./cocktail.component.css'],
})
export class CocktailComponent implements OnInit {
  // public cocktails$: Observable<Cocktail[]>;
  public cocktails$: any[] = [];

  constructor(private svc: CocktailService) {
    // this.cocktails$ = this.svc.getCocktails();
  }

  ngOnInit(): void {}

  //   ngOnInit(): void {
  //     this.svc.getCocktails(name).subscribe((res: any) => {
  //       res.drinks.forEach((drinks: { name: string }) => {
  //         this.svc
  //           .getCocktails(drinks.name)
  //           .subscribe((res: any) => {
  //             this.cocktails$.push(res);
  //             console.log(res);
  //           });
  //       });
  // }
}
