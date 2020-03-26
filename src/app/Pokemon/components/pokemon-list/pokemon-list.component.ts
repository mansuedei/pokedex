import { Component } from "@angular/core";

import { pokemonWithDamage } from "../../pokemon";

@Component({
  selector: "app-pokemon-list",
  templateUrl: "./pokemon-list.component.html",
  styleUrls: ["./pokemon-list.component.scss"]
})
export class PokemonListComponent {
  pokemon = pokemonWithDamage;
}
