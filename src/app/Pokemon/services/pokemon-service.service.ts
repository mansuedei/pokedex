import { Injectable } from '@angular/core';
import { Pokemons } from '../pokemon';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  pokemons = Pokemons;

  public getAll() {
    return this.pokemons;
  }

  public getByName() {
    return this.pokemons.filter(function (pokemon) {
      return pokemon.name == 'bulbasaur'; // will be later changed to the search input value
    });
  }

  public getByID() {
    return this.pokemons.filter(function (pokemon) {
      return pokemon.id == 2; // will be later changed to the search input value
    });
  }
}
