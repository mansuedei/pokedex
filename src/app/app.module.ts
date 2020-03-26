import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { PokemonModule } from "./Pokemon/Pokemon.module";
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, PokemonModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
