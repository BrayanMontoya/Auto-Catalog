import { Component, Input, OnInit } from '@angular/core';
import { Automovil } from 'src/app/models';

@Component({
  selector: 'app-hijo-tabla',
  templateUrl: './hijo-tabla.component.html',
  styleUrls: ['./hijo-tabla.component.css']
})
export class HijoTablaComponent implements OnInit {

   @Input()
   auto: Automovil = {} as Automovil; 
  constructor() { }

  ngOnInit(): void {
  }

}
