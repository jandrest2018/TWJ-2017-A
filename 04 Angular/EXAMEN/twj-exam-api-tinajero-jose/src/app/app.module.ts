import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import {HttpModule} from "@angular/http";

import { InicioComponent } from './Componentes/inicio/inicio.component';
import { peopleStarWars } from './Componentes/people-star-wars/people-star-wars.component';


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    peopleStarWars,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [InicioComponent]
})
export class AppModule { }
