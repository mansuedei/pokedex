import { Component, Input } from '@angular/core';
import { PokemonClass } from '../../../models/PokemonClass';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss'],
})
export class PokemonCardComponent {
  @Input() pokemon: PokemonClass;
  caught = false;

  changePokemonStatus(e, pokemonName: string): void {
    this.caught = e.target.checked;
    if (!this.caught) {
      console.log(`${pokemonName} was successfully released!`);
    } else {
      console.log(`${pokemonName} was successfully caught!`);
    }
  }
}
