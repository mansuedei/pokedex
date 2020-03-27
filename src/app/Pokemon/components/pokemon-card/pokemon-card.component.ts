import { Component, Input } from "@angular/core";
import { Pokemon } from "../../pokemon";

@Component({
  selector: "app-pokemon-card",
  templateUrl: "./pokemon-card.component.html",
  styleUrls: ["./pokemon-card.component.scss"]
})
export class PokemonCardComponent {
  @Input() pokemon: Pokemon;
  caught: boolean = false;

  displayConsoleMessage(pokemonName: string): void {}

  changePokemonStatus(e, pokemonName: string): void {
    this.caught = e.target.checked;
    if (!this.caught) {
      console.log(`${pokemonName} was successfully released!`);
    } else {
      console.log(`${pokemonName} was successfully caught!`);
    }
  }
}
