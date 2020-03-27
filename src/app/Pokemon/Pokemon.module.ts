import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { HeaderComponent } from "./components/header/header.component";
import { PokemonListComponent } from "./components/pokemon-list/pokemon-list.component";
import { PokemonCardComponent } from "./components/pokemon-card/pokemon-card.component";

@NgModule({
  declarations: [HeaderComponent, PokemonListComponent, PokemonCardComponent],
  imports: [CommonModule, BrowserModule, FormsModule],
  exports: [HeaderComponent, PokemonListComponent]
})
export class PokemonModule {}
