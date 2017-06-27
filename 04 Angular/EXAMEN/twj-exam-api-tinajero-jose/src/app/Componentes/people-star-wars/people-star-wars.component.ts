import {Component, Input, OnInit} from '@angular/core';
import {InputDecorator} from "@angular/core/src/metadata/directives";
import {PeopleSWInterface} from "../../Interfaces/PeopleSWInterface";

@Component({
  selector: 'app-planeta-star-wars',
  templateUrl: './people-star-wars.component.html',
  styleUrls: ['./people-star-wars.component.css']
})
export class peopleStarWars implements OnInit {

  constructor() { }
  @Input() persona:PeopleSWInterface;

  ngOnInit() {
    console.log(`El personaje es:`,this.persona);
  }


}
