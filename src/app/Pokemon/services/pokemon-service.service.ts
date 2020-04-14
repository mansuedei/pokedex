import { Injectable } from '@angular/core';
import { Pokemons } from '../pokemon';
import { PokemonClass } from '../../models/PokemonClass';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  pokemons = Pokemons;

  public getAll() {
    return this.pokemons;
  }

  public getByName(name:string) {
    debugger;
    return this.pokemons.filter(function (pokemon: PokemonClass) {
      return pokemon.name === name;
    });
  }

  public getByID() {
    return this.pokemons.filter(function (pokemon: PokemonClass) {
      return pokemon.id == 2; // will be later changed to the search input value
    });
  }
}
