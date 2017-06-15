import { Component, OnInit } from '@angular/core';
import {CelularInterface} from "../../Interface/celular";

@Component({
  selector: 'app-celular',
  templateUrl: './celular.component.html',
  styleUrls: ['./celular.component.css']
})
export class CelularComponent implements OnInit {

  @Input() celular:CelularInterface;
  constructor() { }

  ngOnInit() {
  }

}
