
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ViewCell } from 'ng2-smart-table';

import { ClientesService } from './clientes.service';
import { LocalDataSource } from 'ng2-smart-table';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EditModal } from './edit-modal/edit-modal.component';
import { AddModal } from './add-modal/add-modal.component';

//import { DatosTokenService } from './../services/datostoken.service';


@Component({
  selector: 'clientes',
  styleUrls: ['./clientes.scss'],
  templateUrl: './clientes.html',

})
export class Clientes {

    data;
    filterQuery = '';
    rowsOnPage = 10;
    sortBy = 'id';
    sortOrder = 'asc';

    constructor(private service: ClientesService, private modalService: NgbModal) {
    this.service.getData().then((data) => {
      this.data = data;
    });
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

