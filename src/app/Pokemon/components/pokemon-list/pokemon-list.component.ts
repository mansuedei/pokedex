import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon-service.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss'],
})
export class PokemonListComponent {
  public displayAsList = false;
  public pokemons;

  constructor(private _pokemonService: PokemonService) {}

  ngOnInit() {
    this.pokemons = this._pokemonService.getAll();
  }

  toggleView(e): void {
    this.displayAsList = e.target.checked;
  }

  onStatusChange(message: string): void {
    console.log(message);
  }
}
