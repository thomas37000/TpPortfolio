import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CocktailComponent } from './components/cocktail/cocktail.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { PokemonsComponent } from './components/pokemons/pokemons.component';
import { SeriesComponent } from './components/series/series.component';
import { QuestionguardGuard } from './questionguard.guard';

const routes: Routes = [
  // { path: '', component: LoginComponent },
  // {
  //   path: 'home',
  //   component: HomeComponent,
  //   canActivate: [QuestionguardGuard],
  // },
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'pokemons',
    component: PokemonsComponent,
  },
  {
    path: 'messagerie',
    component: ContactComponent,
  },
  {
    path: 'series',
    component: SeriesComponent,
  },
  {
    path: 'cocktail',
    component: CocktailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
