import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-popularidad-pelicula',
  templateUrl: './popularidad-pelicula.component.html',
  styleUrls: ['./popularidad-pelicula.component.css']
})
export class PopularidadPeliculaComponent implements OnInit {

  constructor() { }
  @Input() popularidad: string;

  ngOnInit() {
  }

}
