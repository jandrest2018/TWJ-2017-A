
import {AppComponent} from "./app.component";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {NgModule} from "@angular/core";
import { EstiloComponent } from './estilo/estilo.component';
import {InicioComponent} from "./Componentes/inicio/inicio.component";
import { PlanetaStarWarsComponent } from './Componentes/planeta-star-wars/planeta-star-wars.component';
import { DiameterComponent } from './Componentes/diameter/diameter.component';
import { ClimateComponent } from './Componentes/climate/climate.component';
import { GravityComponent } from './Componentes/gravity/gravity.component';
import { TerrainComponent } from './Componentes/terrain/terrain.component';
import { PopulationComponent } from './Componentes/population/population.component';


@NgModule({
  declarations: [
    AppComponent,
    EstiloComponent,
    InicioComponent,
    PlanetaStarWarsComponent,
    DiameterComponent,
    ClimateComponent,
    GravityComponent,
    TerrainComponent,
    PopulationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    // http
  ],
  bootstrap: [InicioComponent]
})


export class AppModule { }
