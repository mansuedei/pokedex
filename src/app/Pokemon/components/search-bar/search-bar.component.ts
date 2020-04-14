import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {
@Output() changed = new EventEmitter<string>();
searchedPokemon="";

searchButton(): void {
  this.changed.emit(this.searchedPokemon);
}
}


