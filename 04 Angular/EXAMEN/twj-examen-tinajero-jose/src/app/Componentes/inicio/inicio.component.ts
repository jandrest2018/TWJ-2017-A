import { Component, OnInit } from '@angular/core';
import {CelularInterface} from "../../Interface/Celular";
import {Http} from "@angular/http";

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  celularlist: CelularInterface[];
  nuevoCelular: CelularInterface = {
    nombre: "",
    sistemaOperativo: "",
    version: null
  };

  constructor(private _http: Http) {
  }

  crearCelular() {
    console.log("ESTOY EN CREAR CELULAR");

    let celular: CelularInterface = {
      nombre: this.nuevoCelular.nombre,
      sistemaOperativo: this.nuevoCelular.sistemaOperativo,
      version: this.nuevoCelular.version
    }
    this._http.post("http://localhost:1337/celular", celular).subscribe(respuesta => {
      let respuestaJson = respuesta.json();
      console.log("respuesta json:", respuestaJson);
      this.actualizarCelular();
    }, error => {
      console.log("error: ", error);
    });
  }

  actualizarCelular() {
    this._http.get("http://localhost:1337/celular").subscribe(respuesta => {
      let rJson = respuesta.json();
      console.log("respuesta json:", rJson);
      this.celularlist = rJson;

    }, error => {
      console.log("error: ", error);
    });
  }

  ngOnInit() {
    this._http.get("http://localhost:1337/celular").subscribe(respuesta => {
      let rJson = respuesta.json();
      console.log("respuesta json:", rJson);
      this.celularlist = rJson;

    }, error => {
      console.log("error: ", error);
    });
  }
}
