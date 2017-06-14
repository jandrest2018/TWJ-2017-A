import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import {HttpModule} from "@angular/http";
import { EstiloComponent } from './estilo/estilo.component';
import { InicioComponent } from './Componentes/inicio/inicio.component';
import { PeliculaBatmanComponent } from './Componentes/pelicula-batman/pelicula-batman.component';
import { TituloPeliculaComponent } from './Componentes/titulo-pelicula/titulo-pelicula.component';
import { PopularidadPeliculaComponent } from './Componentes/popularidad-pelicula/popularidad-pelicula.component';
import { DescripcionPeliculaComponent } from './Componentes/descripcion-pelicula/descripcion-pelicula.component';
import { PosterPeliculaComponent } from './Componentes/poster-pelicula/poster-pelicula.component';
import { VotosPeliculaComponent } from './Componentes/votos-pelicula/votos-pelicula.component';

@NgModule({
  declarations: [
    AppComponent,
    EstiloComponent,
    InicioComponent,
    PeliculaBatmanComponent,
    TituloPeliculaComponent,
    PopularidadPeliculaComponent,
    DescripcionPeliculaComponent,
    PosterPeliculaComponent,
    VotosPeliculaComponent
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
