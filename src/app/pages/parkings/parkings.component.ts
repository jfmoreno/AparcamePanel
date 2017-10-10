
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ViewCell } from 'ng2-smart-table';

import { ParkingsService } from './parkings.service';
import { LocalDataSource } from 'ng2-smart-table';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EditModal } from './edit-modal/edit-modal.component';
import { AddModal } from './add-modal/add-modal.component';
import { EstadisticasModal } from './estadisticas/estadisticas-modal.component';

//import { DatosTokenService } from './../services/datostoken.service';


@Component({
  selector: 'parkings',
  styleUrls: ['./parkings.scss'],
  templateUrl: './parkings.html',

})
export class Parkings implements OnInit {

parkings: any;

    data;
    filterQuery = '';
    rowsOnPage = 10;
    sortBy = 'email';
    sortOrder = 'asc';

    constructor(private Parkingservice: ParkingsService, private modalService: NgbModal) {
    this.Parkingservice.getData().then((data) => {
      this.data = data;
    });
  }

  ngOnInit() { 
    this.Parkingservice.getTienda(1).subscribe(
      res =>{
      console.log(res);
      this.parkings=res[0].data;
      console.log(this.parkings);
      },
      err=>{ //Error de conexion con el servidor
       console.log(err);
      },   
  ); 
}

  estadisticModalShow() {
    const activeModal = this.modalService.open(EstadisticasModal, {size: 'sm', backdrop: 'static'});
    activeModal.componentInstance.modalHeader = '(NOMBRE)Facultad de Economia';
    }



    editModalShow() {
    const activeModal = this.modalService.open(EditModal, { size: 'lg' });
    //activeModal.componentInstance.modalHeader = 'Código';
    //activeModal.componentInstance.modalContent = 'Nombre del Parking';
  }

    addParkingModal() {
    const activeModal = this.modalService.open(AddModal, { size: 'lg' });
  }


    toInt(num: string) {
        return +num;
    }

    sortByWordLength = (a: any) => {
        return a.nombre.length;
    }


}

