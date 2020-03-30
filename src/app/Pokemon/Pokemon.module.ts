import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { PokemonItemComponent } from './components/pokemon-item/pokemon-item.component';
import { PokemonCardComponent } from './components/pokemon-card/pokemon-card.component';
import { HighlightDamageDirective } from './directives/highlight-damage.directive';

@NgModule({
  declarations: [
    PokemonListComponent,
    PokemonItemComponent,
    PokemonCardComponent,
    HighlightDamageDirective,
  ],
  imports: [CommonModule, BrowserModule, FormsModule],
  exports: [PokemonListComponent],
})
export class PokemonModule {}
