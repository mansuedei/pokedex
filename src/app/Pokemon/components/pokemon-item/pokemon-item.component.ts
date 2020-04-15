import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { PokemonClass } from '../../../models/PokemonClass';

@Component({
  selector: 'app-pokemon-item',
  templateUrl: './pokemon-item.component.html',
  styleUrls: ['./pokemon-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PokemonItemComponent {
  @Input() pokemon: PokemonClass;
  caught = false;

  @Output() onStatusChange = new EventEmitter<string>();

  changePokemonStatus(e, pokemonName: string): void {
    this.caught = e.target.checked;
    if (!this.caught) {
      this.onStatusChange.emit(`${pokemonName} was successfully released!`);
    } else {
      this.onStatusChange.emit(`${pokemonName} was successfully caught!`);
    }
  }
}
