import { Component, OnInit } from '@angular/core';
import { DatasService } from '../../services/datasServices';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css'],
})
export class PokemonsComponent implements OnInit {
  pokemonList: any[] = [];

  constructor(private dataService: DatasService) {}

  ngOnInit(): void {
    // results => pour afficher les 20° pokémons ( limits = 20)
    this.dataService.getAllPokemons().subscribe((res: any) => {
      res.results.forEach((result: { name: string }) => {
        this.dataService
          .getAllDatasPokemon(result.name)
          .subscribe((res: any) => {
            this.pokemonList.push(res);
            console.log(res);
          });
      });

      // récupérer les générations de l'api
      res.results.forEach((result: { name: string }) => {
        this.dataService
          .getGenerationsPokemon(result.name)
          .subscribe((res: any) => {
            this.pokemonList.push(res);
            console.log(res);
          });
      });
    });
  }
}
