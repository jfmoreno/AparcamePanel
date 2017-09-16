import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ViewCell } from 'ng2-smart-table';

import { UsuariosService } from './usuarios.service';
import { LocalDataSource } from 'ng2-smart-table';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserModal } from './user-modal/user-modal.component';
import { NgUploaderOptions } from 'ngx-uploader';

//import { DatosTokenService } from './../services/datostoken.service';


@Component({
  selector: 'usuarios',
  styleUrls: ['./usuarios.scss'],
  templateUrl: './usuarios.html',

})
export class Usuarios {

    data;
    filterQuery = '';
    rowsOnPage = 10;
    sortBy = 'id';
    sortOrder = 'asc';

    constructor(private service: UsuariosService, private modalService: NgbModal) {
    this.service.getData().then((data) => {
      this.data = data;
    });
  }

    lgModalShow() {
    const activeModal = this.modalService.open(UserModal, { size: 'lg' });
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

