import {
  Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
} from '@angular/core';
import { PokemonClass } from '../../../models/PokemonClass';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PokemonCardComponent {
  @Input() pokemon: PokemonClass;

  @Output() onStatusChange = new EventEmitter<string>();

  changePokemonStatus(e, name: string, caught: boolean): boolean {
    debugger;
    caught = !caught;
    if (!caught) {
      this.onStatusChange.emit(`${name} was successfully released!`);
    } else {
      this.onStatusChange.emit(`${name} was successfully caught!`);
    }
    return caught;
  }
}
