import { Component, OnInit } from '@angular/core';
import { Automovil } from '../models';
import { AutosService } from '../autos.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  autos: Automovil[] = [];
  autoSeleccionado: Automovil = {} as Automovil;
  constructor(private autoService: AutosService) { }

  ngOnInit() {
    this.autoService.getAutos().subscribe((response)=>{
      this.autos = response.data;
    });

  }

  mandarDataHijo(auto: Automovil){
    this.autoSeleccionado = auto; 
  }

}
