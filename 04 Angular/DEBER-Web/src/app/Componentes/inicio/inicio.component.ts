import {Component, OnInit } from '@angular/core';
import {Http} from "@angular/http";
import 'rxjs/add/operator/map'
import {PlanetaSWInterface} from "../../Interfaces/PlanetaSWInterface";
import {UsuarioClass} from "../../Clases/UsuarioClass";

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  nombre: string = "nombresito";
  usuarios: UsuarioClass[] = [];
  nuevoUsuario: UsuarioClass = new UsuarioClass("");

  planetas: any[] = [];

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

  constructor(private _http: Http) {
  }

  ngOnInit() {
    this._http.get('http://localhost:1337/usuario/')
      .subscribe(
        respuesta => {
          let respJson:UsuarioClass[]= respuesta.json();
          console.log("respuesta json:", respJson);
          this.usuarios=respJson;
          console.log("Usuarios: ", this.usuarios);

        },
        error => {
          console.log("Error", error)
        }
      )
  }


  cambiarInput(nombreEtiqueta){
    console.log(nombreEtiqueta.type);
    console.log(nombreEtiqueta.value);
    this.nombre= nombreEtiqueta.value;
  }

  cargarPlanetas() {
    this._http
      .get('http://swapi.co/api/people')
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

  crearUsuario() {
    console.log("Creo usuario");
    /*let usuario= {
     nombre: this.nuevoUsuario.nombre
     }*/
    this._http.post('http://localhost:1337/Usuario', this.nuevoUsuario)
      .subscribe(
        respuesta => {
          let respuestaJson = respuesta.json();
          console.log('respuestaJson: ', respuestaJson);
          this.usuarios.push(respuestaJson);

        },
        error => {
          console.log("Error", error)
        }
      )
  }
  eliminarUsuario(id, i){

    this._http.delete("http://localhost:1337/usuario/"+id).subscribe(respuesta=>{
      let rJson = respuesta.json();
      console.log("respuesta json:", rJson);
      this.usuarios.splice(i,1);

    }, error=>{
      console.log("error: ", error);
    });
  }
  actualizarUsuario(){
    this._http.get("http://localhost:1337/usuario").subscribe(respuesta=>{
      let rJson = respuesta.json();
      console.log("respuesta json:", rJson);
      this.usuarios=rJson;

    }, error=>{
      console.log("error: ", error);
    });
  }
}

