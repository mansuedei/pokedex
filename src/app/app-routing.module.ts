import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokemonListComponent} from './Pokemon/components/pokemon-list/pokemon-list.component';
import { PokemonDetailsComponent} from './Pokemon/components/pokemon-details/pokemon-details.component';

const routes: Routes = [
  {path: 'list', component: PokemonListComponent},
  {path: 'details/:pokemonId', component: PokemonDetailsComponent},
  {path:'', redirectTo: '/list', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
