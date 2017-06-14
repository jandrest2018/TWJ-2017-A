import {Component, Input, OnInit} from '@angular/core';
import {InputDecorator} from "@angular/core/src/metadata/directives";
import {PeliculitasInterface} from "../../Interfaces/PeliculasBatman";

@Component({
  selector: 'app-pelicula-batman',
  templateUrl: './pelicula-batman.component.html',
  styleUrls: ['./pelicula-batman.component.css']
})
export class PeliculaBatmanComponent implements OnInit {

  constructor() { }
  @Input() pelicula:PeliculitasInterface;

  ngOnInit() {
    console.log(`el valor de la pelicula es:`,this.pelicula);
  }

//este es un commit
  //este es otro commit
}
