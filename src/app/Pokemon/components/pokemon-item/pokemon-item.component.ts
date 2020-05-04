import {
  Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
} from '@angular/core';
import { PokemonClass } from '../../../models/PokemonClass';

@Component({
  selector: 'app-pokemon-item',
  templateUrl: './pokemon-item.component.html',
  styleUrls: ['./pokemon-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PokemonItemComponent {
  @Input() pokemon: PokemonClass;

  @Output() CatchReleaseCheckboxChange = new EventEmitter<PokemonClass>();

  onCatchReleaseCheckboxChange() {
    this.CatchReleaseCheckboxChange.emit();
  }

  getCurrentPokemonStatus(pokemon: PokemonClass): string {
    return pokemon.caught ? 'Release' : 'Catch';
  }
}
