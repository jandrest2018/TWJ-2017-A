import { Component } from '@angular/core';

@Component({
  selector: 'twj-raiz',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
usuario: UsuarioInt ={
  nombre: "",
  apellido: "unapellido"

}
url: string = "http://coffeescript.org/";
url2: string = "https://pbs.twimg.com/profile_images/557241144392708096/slQydAMv.png";
parrafo="";
background="yellow";
constructor(){
  /*console.log("Constructor");
  this.holamundo();
  console.log(this.saludar(this.usuario.nombre));*/
  this.usuario.nombre= "unnombre";
  this.parrafo= "este es un bonito parrafito";

  setTimeout(()=> {
    this.usuario.nombre= "otronombre";
  }, 3000);
}
holamundo(){
  console.log("Wolis");
}
saludar(nombre: string, apellido?: string):string{
return `woli tu ${nombre} ${apellido}`
}
}

interface UsuarioInt {
  nombre: string,
  apellido: string
}
