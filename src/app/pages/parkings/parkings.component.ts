import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ViewCell } from 'ng2-smart-table';

import { ParkingsService } from './parkings.service';
import { LocalDataSource } from 'ng2-smart-table';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EditModal } from './edit-modal/edit-modal.component';

//import { DatosTokenService } from './../services/datostoken.service';


@Component({
  selector: 'parkings',
  styleUrls: ['./parkings.scss'],
  templateUrl: './parkings.html',

})
export class Parkings {

    data;
    filterQuery = '';
    rowsOnPage = 10;
    sortBy = 'email';
    sortOrder = 'asc';

    constructor(private service: ParkingsService, private modalService: NgbModal) {
    this.service.getData().then((data) => {
      this.data = data;
    });
  }

    lgModalShow() {
    const activeModal = this.modalService.open(EditModal, { size: 'lg' });
    //activeModal.componentInstance.modalHeader = 'Código';
    //activeModal.componentInstance.modalContent = 'Nombre del Parking';
  }

    toInt(num: string) {
        return +num;
    }

    sortByWordLength = (a: any) => {
        return a.nombre.length;
    }


}

