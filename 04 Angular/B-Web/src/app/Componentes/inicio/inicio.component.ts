import { Component, OnInit } from '@angular/core';
import {Http} from "@angular/http";
import 'rxjs/add/operator/map'
import {PeliculitasInterface} from "../../Interfaces/PeliculasBatman";

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  nombre: string = "nombresito";
  arregloUsr=[{
    nombre:"nombrecito1",
    apellido:"apellidito1",
    conectado: true
  },
    {
      nombre:"nombrecito2",
      apellido:"apellidito2",
      conectado: false
    },
    {
      nombre:"nombrecito3",
      apellido:"apellidito3",
      conectado: true
    }];
  cambiarNombre(){
    this.nombre="otro nombresito";
  }

  otroNombre():void{
    this.nombre="un nombre de foco";
  }

  cambiarInput(nombreEtiqueta){
  console.log(nombreEtiqueta.type);
  console.log(nombreEtiqueta.value);
    this.nombre= nombreEtiqueta.value;
}
  peliculas: PeliculitasInterface[];
  constructor(private _http:Http) {
    // Inicia la clase pero el componente no esta listo
  }

  ngOnInit() {
    //Esta listo el componente
  }
  cargarBatman(){
    this._http.get("https://api.themoviedb.org/3/search/movie?api_key=afb1e0f512ed29f413f9333f4f87a77a&language=en-US&query=Batman&page=1&include_adult=false")
      //.map(response=>response.json())
      .subscribe(
        (response)=>{
          console.log("Response:", response.json());
          let respuesta= response.json();
          this.peliculas=(respuesta.results);
          this.peliculas=this.peliculas.map(
            (valor,indice,arreglo)=>{
              valor.imagenURL ="/assets/Imagenes/"+valor.title+'.jpg';
              return valor;
            }
          )
        },
        (error)=>{
          console.log("Error:", error);
        },
        ()=>{
          console.log("finally");
        }
      )//3 funciones como parametros 1 como try, 2 catch, 3 finally
  }


}

