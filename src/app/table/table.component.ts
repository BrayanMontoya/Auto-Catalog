import { Component, OnInit } from '@angular/core';
import { AUTOMOVILES } from '../data';
import { Automovil } from '../models';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  autos: Automovil[] = [];
  autoSeleccionado: Automovil = {} as Automovil;
  constructor() { }

  ngOnInit() {
    this.autos = AUTOMOVILES;
  }

  mandarDataHijo(auto: Automovil){
    this.autoSeleccionado = auto; 
  }

}