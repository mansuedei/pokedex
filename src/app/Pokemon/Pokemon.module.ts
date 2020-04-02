import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { PokemonItemComponent } from './components/pokemon-item/pokemon-item.component';
import { PokemonCardComponent } from './components/pokemon-card/pokemon-card.component';
import { HighlightDamageDirective } from './directives/highlight-damage.directive';
import { PokemonDetailsComponent } from './components/pokemon-details/pokemon-details.component';

@NgModule({
  declarations: [
    PokemonListComponent,
    PokemonItemComponent,
    PokemonCardComponent,
    HighlightDamageDirective,
    PokemonDetailsComponent,
  ],
  imports: [CommonModule, BrowserModule, FormsModule],
  exports: [PokemonListComponent, PokemonDetailsComponent],
})
export class PokemonModule {}
