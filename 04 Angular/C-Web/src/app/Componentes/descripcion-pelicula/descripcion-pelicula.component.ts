import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-descripcion-pelicula',
  templateUrl: './descripcion-pelicula.component.html',
  styleUrls: ['./descripcion-pelicula.component.css']
})
export class DescripcionPeliculaComponent implements OnInit {

  constructor() { }
  @Input() descripcion:string;

  ngOnInit() {
  }

}
