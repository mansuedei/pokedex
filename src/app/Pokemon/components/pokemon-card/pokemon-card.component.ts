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

  @Output() CatchReleaseCheckboxChange = new EventEmitter<PokemonClass>();

  onCatchReleaseCheckboxChange() {
    this.CatchReleaseCheckboxChange.emit();
  }

  getCurrentPokemonStatus(pokemon: PokemonClass): string {
    return pokemon.caught ? 'Release' : 'Catch';
  }
}
