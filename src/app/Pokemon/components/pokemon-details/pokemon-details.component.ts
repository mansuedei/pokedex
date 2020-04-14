import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// import { Pokemons } from '../../pokemon';
import { PokemonClass } from '../../../models/PokemonClass';
import {PokemonService} from '../../services/pokemon-service.service';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PokemonDetailsComponent {
  pokemon: PokemonClass;
  caught = false;
  private _pokemonService;

  @Output() onStatusChange = new EventEmitter<string>();

  changePokemonStatus(e, pokemonName: string): void {
    this.caught = e.target.checked;
    if (!this.caught) {
      this.onStatusChange.emit(`${pokemonName} was successfully released!`);
    } else {
      this.onStatusChange.emit(`${pokemonName} was successfully caught!`);
    }
  }

  constructor(private PokemonService: PokemonService, private route: ActivatedRoute) {
    this._pokemonService = PokemonService;
  }
    
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.pokemon = this._pokemonService.getById(+params.get('pokemonId'))
    })
  }
}
