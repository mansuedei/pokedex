import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PokemonListComponent } from './Pokemon/components/pokemon-list/pokemon-list.component';

const routes: Routes = [{ path: '', component: PokemonListComponent }];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
