import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AdminTablesService } from './adminTables.service';
import { LocalDataSource } from 'ng2-smart-table';
import { NgUploaderOptions } from 'ngx-uploader';

import { DefaultModal } from './default-modal/default-modal.component';

@Component({
  selector: 'adminTables',
  //template: `<router-outlet>asdadsad</router-outlet>`,
  templateUrl: './adminTables.html',
  styleUrls: ['./adminTables.scss'],
})
export class AdminTables {

  query: string = '';

  settings = {
    add: {
      addButtonContent: '<i class="ion-ios-plus-outline"></i>',
      createButtonContent: '<i class="ion-checkmark"></i>',
      cancelButtonContent: '<i class="ion-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="ion-edit"></i>',
      saveButtonContent: '<i class="ion-checkmark"></i>',
      cancelButtonContent: '<i class="ion-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="ion-trash-a"></i>',
      confirmDelete: true,
    },

    columns: {
      id: {
        title: 'ID',
        type: 'number',
      },
      nombre: {
        title: 'Nombre Completo',
        type: 'string',
      },
      email: {
        title: 'E-mail',
        type: 'string',
      },
      puesto : {
        title: 'Puesto',
        type: 'string',
      },
      localidad: {
        title: 'Localidad',
        type: 'string',
      },
      
    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(protected service: AdminTablesService, private modalService: NgbModal) {
    this.service.getData().then((data) => {
      this.source.load(data);
    });
  }

  onDeleteConfirm(event): void {
    
    if (window.confirm('Estas seguro que deseas eliminarlo?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

  childModalShow(event): void {
    const activeModal = this.modalService.open(DefaultModal, { size: 'sm' });
    activeModal.componentInstance.modalHeader = '¡¡Ojo!!';
    activeModal.componentInstance.modalContent = `Estas seguro que deseas eliminarlo?`;
  }


}
