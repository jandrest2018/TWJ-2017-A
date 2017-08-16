import { Component, OnInit } from '@angular/core';
import {Http} from "@angular/http";
import {ActoresInterface} from "../../Interface/Actores";

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor(private _http:Http) { }
  actoresList: ActoresInterface[];
  consulta:string=null;

  ngOnInit() {
  }

  cargarActores(){
    this._http.get("http://microblogging.wingnity.com/JSONParsingTutorial/jsonActors")
      .subscribe(
        (response)=>{
          console.log("Response:", response.json());
          let respuesta= response.json();
          this.actoresList=(respuesta.result);
        },
        (error)=>{
          console.log("Error:", error);
        },
        ()=>{
          console.log("finally");
        }
      )
  }

  cargarActores2(){
    this._http.get("https://TWJ2017-A-JAT.mybluemix.net/actor")
    //.map(response=>response.json())
      .subscribe(
        (response)=>{
          console.log("Response:", response.json());
          let respuesta= response.json();
          this.actoresList=(respuesta);
        },
        (error)=>{
          console.log("Error:", error);
        },
        ()=>{
          console.log("finally");
        }
      )
  }

}
