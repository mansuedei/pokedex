import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { PokemonCardComponent } from './pokemon-card/pokemon-card.component';



@NgModule({
  declarations: [HomeComponent, SearchBarComponent, PokemonCardComponent],
  imports: [
    CommonModule
  ]
})
export class PokemonModule { }
