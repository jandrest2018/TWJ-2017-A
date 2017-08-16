import {Component, Input, OnInit} from '@angular/core';
import {ActoresInterface} from "../../Interface/Actores";
import {Http} from "@angular/http";
import {ActorClase} from "../../Clases/Actor";

@Component({
  selector: 'app-actores',
  templateUrl: './actores.component.html',
  styleUrls: ['./actores.component.css']
})
export class ActoresComponent implements OnInit {

  @Input() actor:ActoresInterface;
  constructor(private _http:Http) { }

  ngOnInit() {
  }

  guardarActor(){
    let usuario:ActorClase={
      name:this.actor.name,
      description:this.actor.description,
      dob:this.actor.dob,
      country: this.actor.country,
      spouse: this.actor.spouse
    };
    this._http.post("https://TWJ2017-A-JAT.mybluemix.net/actor", usuario).subscribe(respuesta=>{
      let respuestaJson = respuesta.json();
      console.log("respuesta json:", respuestaJson);
    }, error=>{
      console.log("error: ", error);
    });

  }

}
