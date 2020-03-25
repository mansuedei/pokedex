import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../components/home/home.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { PokemonCardComponent } from '../components/pokemon-card/pokemon-card.component';



@NgModule({
  declarations: [HomeComponent, SearchBarComponent, PokemonCardComponent],
  imports: [
    CommonModule
  ]
})
export class PokemonModule { }
