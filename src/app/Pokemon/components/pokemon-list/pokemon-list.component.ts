import { Component } from "@angular/core";

import { Pokemons } from "../../pokemon";

@Component({
  selector: "app-pokemon-list",
  templateUrl: "./pokemon-list.component.html",
  styleUrls: ["./pokemon-list.component.scss"]
})
export class PokemonListComponent {
  pokemons = Pokemons;
  displayAsList: boolean = false;

  toggleView(e): void {
    this.displayAsList = e.target.checked;
    if (!this.displayAsList) {
      console.log(`Display as cards`);
    } else {
      console.log(`Display as list`);
    }
  }
}
