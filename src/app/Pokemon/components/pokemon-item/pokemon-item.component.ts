import { Component, Input } from "@angular/core";
import { Pokemon } from "../../pokemon";

@Component({
  selector: "app-pokemon-item",
  templateUrl: "./pokemon-item.component.html",
  styleUrls: ["./pokemon-item.component.scss"]
})
export class PokemonItemComponent {
  @Input() pokemon: Pokemon;
  caught: boolean = false;

  changePokemonStatus(e, pokemonName: string): void {
    this.caught = e.target.checked;
    if (!this.caught) {
      console.log(`${pokemonName} was successfully released!`);
    } else {
      console.log(`${pokemonName} was successfully caught!`);
    }
  }
}
