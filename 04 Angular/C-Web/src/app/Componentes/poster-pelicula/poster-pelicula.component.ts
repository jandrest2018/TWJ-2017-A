import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-poster-pelicula',
  templateUrl: './poster-pelicula.component.html',
  styleUrls: ['./poster-pelicula.component.css']
})
export class PosterPeliculaComponent implements OnInit {

  constructor() { }
  @Input() poster:string;

  ngOnInit() {
  }

}
