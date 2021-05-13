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
    this.displayProgressBar = true;
    this.pageSize = 10;
    this.page = Number(sessionStorage.getItem('currentPage'));
    this.autoService.getAutos().subscribe((response)=>{

      setTimeout(()=>{
        this.displayProgressBar = false;
      this.autos = response.data;
      }, 1500)
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
        this.autoService.updateAutos(auto).subscribe(response=>{
          sessionStorage.setItem('currentPage', this.page.toString());
          this.ngOnInit();
        });
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
        this.autoService.addAuto(auto).subscribe(response =>{
          sessionStorage.setItem('currentPage', this.page.toString());
          this.ngOnInit()
        });
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
        this.autoService.deleteAuto(autoTemp).subscribe(response => {
          sessionStorage.setItem('currentPage', this.page.toString());
          this.ngOnInit();
        });
      },
      (reason) => {
        console.log(reason);
      }
    );
  }

}
