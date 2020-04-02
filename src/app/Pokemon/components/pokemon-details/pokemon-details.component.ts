import {
  Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
} from '@angular/core';

import { Pokemons } from '../../pokemon';
import { PokemonClass } from '../../../models/PokemonClass';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PokemonDetailsComponent {
  @Input() pokemons = Pokemons;
  caught = false;

  @Output() onStatusChange = new EventEmitter<string>();

  changePokemonStatus(e): void {
    this.caught = e.target.checked;
    if (!this.caught) {
      this.onStatusChange.emit(
        `${this.pokemons[0].id} was successfully released!`
      );
    } else {
      this.onStatusChange.emit(
        `${this.pokemons[0].id} was successfully caught!`
      );
    }
  }
}
