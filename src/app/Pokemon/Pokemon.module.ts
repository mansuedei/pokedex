import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { PokemonItemComponent } from './components/pokemon-item/pokemon-item.component';
import { PokemonCardComponent } from './components/pokemon-card/pokemon-card.component';
import { HighlightDamageDirective } from './directives/highlight-damage.directive';
import { PokemonDetailsComponent } from './components/pokemon-details/pokemon-details.component';
import { PokemonService } from './services/pokemon-service.service';
import { SearchBarComponent } from './components/search-bar/search-bar.component';

@NgModule({
  declarations: [
    PokemonListComponent,
    PokemonItemComponent,
    PokemonCardComponent,
    HighlightDamageDirective,
    PokemonDetailsComponent,
    SearchBarComponent,
  ],
  imports: [CommonModule, BrowserModule, FormsModule, RouterModule],
  exports: [PokemonListComponent, PokemonDetailsComponent],
  providers: [PokemonService],
})
export class PokemonModule {}
