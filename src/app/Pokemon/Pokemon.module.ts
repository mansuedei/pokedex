import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HeaderComponent } from "./components/header/header.component";
import { PokemonListComponent } from "./components/pokemon-list/pokemon-list.component";

@NgModule({
  declarations: [HeaderComponent, PokemonListComponent],
  imports: [CommonModule],
  exports: [HeaderComponent, PokemonListComponent]
})
export class PokemonModule {}
