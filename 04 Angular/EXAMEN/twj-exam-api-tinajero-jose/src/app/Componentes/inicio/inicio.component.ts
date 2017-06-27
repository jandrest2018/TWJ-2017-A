import {Component, OnInit } from '@angular/core';
import {Http} from "@angular/http";
import 'rxjs/add/operator/map'
import {PeopleSWInterface} from "../../Interfaces/PeopleSWInterface";

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {


  personas: any[] = [];

  constructor(private _http: Http) {
  }

  cargarPersonas() {
    this._http
      .get('http://swapi.co/api/people')
      // .map(response => response.json())
      .subscribe(
        (reponse) => {
          console.log('Response: ', reponse);
          console.log(reponse.json());
          let repuesta:any = reponse.json();
          console.log(repuesta.next);
          this.personas = reponse.json().results;
          this.personas = this.personas.map(
            (persona)=>{
              persona.imagenURL = "/assets/imagenesStarWars" + persona.name+'.jpg';
              return persona;
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

