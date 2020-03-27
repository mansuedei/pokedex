import { Component, EventEmitter, NgModule } from "@angular/core";

import { pokemonWithInfo } from "../../pokemon";

@Component({
  selector: "app-pokemon-list",
  templateUrl: "./pokemon-list.component.html",
  styleUrls: ["./pokemon-list.component.scss"]
})
export class PokemonListComponent {
  pokemon = pokemonWithInfo;
  caught: boolean = false;

  displayConsoleMessage(pokemonName: string): void {
    console.log(`${pokemonName} was successfully caught!`);
  }

  togglePokemonStatus(): void {
    this.caught = this.caught;
  }
}
