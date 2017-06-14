import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-votos-pelicula',
  templateUrl: './votos-pelicula.component.html',
  styleUrls: ['./votos-pelicula.component.css']
})
export class VotosPeliculaComponent implements OnInit {

  constructor() { }
  @Input() votos: number;

  ngOnInit() {
  }

}
