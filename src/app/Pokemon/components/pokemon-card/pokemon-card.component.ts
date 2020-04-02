import { Component, Input, Output, EventEmitter } from '@angular/core';
import { PokemonClass } from '../../../models/PokemonClass';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss'],
})
export class PokemonCardComponent {
  @Input() pokemon: PokemonClass;
  caught = false;

  @Output()onStatusChange = new EventEmitter<string>();

  changePokemonStatus(e, pokemonName: string): void {
    this.caught = e.target.checked;
    if (!this.caught) {
      this.onStatusChange.emit(`${pokemonName} was successfully released!`);
    } else {
      this.onStatusChange.emit(`${pokemonName} was successfully caught!`);
    }
  }
}
