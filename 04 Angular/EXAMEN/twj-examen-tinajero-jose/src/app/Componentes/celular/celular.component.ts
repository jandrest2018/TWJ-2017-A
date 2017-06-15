import {Component, Input, OnInit} from '@angular/core';
import {CelularInterface} from "../../Interface/Celular";

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
