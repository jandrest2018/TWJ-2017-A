import {Component, Input, OnInit} from '@angular/core';
import {InputDecorator} from "@angular/core/src/metadata/directives";
import {PlanetaSWInterface} from "../../Interfaces/PlanetaSWInterface";

@Component({
  selector: 'app-planeta-star-wars',
  templateUrl: './planeta-star-wars.component.html',
  styleUrls: ['./planeta-star-wars.component.css']
})
export class planetaStarWars implements OnInit {

  constructor() { }
  @Input() planeta:PlanetaSWInterface;

  ngOnInit() {
    console.log(`El planeta es:`,this.planeta);
  }


}
