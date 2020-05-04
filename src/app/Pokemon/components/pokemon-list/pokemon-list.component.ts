import { Component, OnInit } from '@angular/core';
import { PokemonClass } from '../../../models/PokemonClass';
import { PokemonService } from '../../services/pokemon-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss'],
  providers: [PokemonService],
})
export class PokemonListComponent implements OnInit {
  public pokemons: PokemonClass[] = [];
  searchedName: string;
  public displayAsList = false;

  constructor(
    private _pokemonService: PokemonService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.pokemons = this._pokemonService.getAll();
  }

  toggleView(e): void {
    this.displayAsList = e.target.checked;
  }

  getByName(name: string): void {
    this.pokemons = this._pokemonService.getByName(name);
  }

  changePokemonCaughtReleasedStatus(pokemon: PokemonClass): void {
    pokemon.caught = !pokemon.caught;
    const PokemonCaughtReleasedStatus: string = pokemon.caught
      ? 'caught'
      : 'released';
    console.log(
      `${pokemon.name} was successfully ${PokemonCaughtReleasedStatus}!`
    );
  }
}
