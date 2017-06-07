import { Component, OnInit } from '@angular/core';
import {Http} from "@angular/http";
import 'rxjs/add/operator/map'
import {PlanetaSWInterface} from "../../Interfaces/PlanetaSWInterface";

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
  planetas: PlanetaSWInterface[];
  constructor(private _http:Http) {
    // Inicia la clase pero el componente no esta listo
  }

  ngOnInit() {
    //Esta listo el componente
  }
  cargarPlanetas() {
    this._http
      .get('http://swapi.co/api/planets')
      // .map(response => response.json())
      .subscribe(
        (reponse) => {
          console.log('Response: ', reponse);
          console.log(reponse.json());
          let repuesta:any = reponse.json();
          console.log(repuesta.next);
          this.planetas = reponse.json().results;
          this.planetas = this.planetas.map(
            (planeta)=>{
              planeta.imagenURL = "/assets/imagenesStarWars" + planeta.name+'.jpg';
              return planeta;
            }
          )
          //Arreglo


        },
        (error) => {
          console.log('Error: ', error);
        },
        () => {
          console.log('Finally');

        }
      );
  }


}

