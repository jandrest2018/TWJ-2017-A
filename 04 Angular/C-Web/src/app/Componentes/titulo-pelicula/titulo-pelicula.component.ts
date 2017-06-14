import {Component, Input, OnInit} from '@angular/core';
import {InputDecorator} from "@angular/core/src/metadata/directives";
import {PeliculitasInterface} from "../../Interfaces/PeliculasBatman";

@Component({
  selector: 'app-titulo-pelicula',
  templateUrl: './titulo-pelicula.component.html',
  styleUrls: ['./titulo-pelicula.component.css']
})
export class TituloPeliculaComponent implements OnInit {

  constructor() {}
  @Input() titulo:string;


  ngOnInit() {

  }

}
