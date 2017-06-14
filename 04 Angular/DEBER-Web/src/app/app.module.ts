import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import {HttpModule} from "@angular/http";
import { EstiloComponent } from './estilo/estilo.component';
import { InicioComponent } from './Componentes/inicio/inicio.component';
import { planetaStarWars } from './Componentes/planeta-star-wars/planeta-star-wars.component';
import { ClimateComponent } from './Componentes/climate/climate.component';
import { DiameterComponent } from './Componentes/diameter/diameter.component';
import { GravityComponent } from './Componentes/gravity/gravity.component';
import { TerrainComponent } from './Componentes/terrain/terrain.component';
import { PopulationComponent } from './Componentes/population/population.component';

@NgModule({
  declarations: [
    AppComponent,
    EstiloComponent,
    InicioComponent,
    planetaStarWars,
    ClimateComponent,
    DiameterComponent,
    GravityComponent,
    TerrainComponent,
    PopulationComponent
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
