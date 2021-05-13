import { Component, OnInit } from '@angular/core';
import { Automovil } from '../models';
import { AutosService } from '../autos.service';
import { ModalAddUpdateComponent } from '../modal-add-update/modal-add-update.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalDetallesAutoComponent } from '../modal-detalles-auto/modal-detalles-auto.component';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  page = 1;
  pageSize = 10;
  autos: Automovil[] = [];
  autoSeleccionado: Automovil = {} as Automovil;
  displayProgressBar: boolean = true;
  constructor(private autoService: AutosService, private modalService: NgbModal) { }
  auto: Automovil = {} as Automovil;

  ngOnInit() {
    this.autoService.getAutos().subscribe((response)=>{
      this.displayProgressBar = false;
      this.autos = response.data;
      
    });

  }

  mandarDataHijo(auto: Automovil){
    this.autoSeleccionado = auto; 
  }

  openModalEditar(auto: Automovil){
    const modalRef = this.modalService.open(ModalAddUpdateComponent, {centered: true});
    modalRef.componentInstance.auto = auto;
    modalRef.componentInstance.accion = 'Editar';

    modalRef.result.then(
      (auto)=>{
        this.autoService.updateAutos(auto).subscribe(response=>console.log(response));
      },
      (reason)=>{
        console.log(reason);
      }
    )
  }

  openModalAgregar(auto: Automovil){
    const modalRef = this.modalService.open(ModalAddUpdateComponent, {centered: true});
    modalRef.componentInstance.accion = "Agregar";
    modalRef.result.then(
      (auto) => {
        this.autoService.addAuto(auto).subscribe(response => console.log(response));
      },
      (reason) => {
        console.log(reason);
      }
    );

  }

  openModalConfirmarEliminar(auto: Automovil){
    const modalRef = this.modalService.open(ModalDetallesAutoComponent, {centered: true});
    modalRef.componentInstance.auto = auto;
    modalRef.result.then(
      (autoTemp)=>{
        this.autoService.deleteAuto(autoTemp).subscribe(response => console.log(response));
      },
      (reason) => {
        console.log(reason);
      }
    );
  }

}
