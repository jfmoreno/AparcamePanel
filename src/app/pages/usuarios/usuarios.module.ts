
import { FormListComponent } from './user-modal/form-list/form-list.component';


import { UserModal } from './user-modal/user-modal.component';
import { NgbModalModule, NgbDropdownModule, NgbPopoverModule } from '@ng-bootstrap/ng-bootstrap';
import { JWBootstrapSwitchModule } from 'jw-bootstrap-switch-ng2';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { HttpModule } from '@angular/http';

import { DataTableModule } from 'angular2-datatable';

import { routing } from './usuarios.routing';
import { Usuarios } from './usuarios.component';
import { UsuariosService } from './usuarios.service';
import { DataFilterPipe } from './data-filter.pipe';


@NgModule({

  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgaModule,
    routing,
    Ng2SmartTableModule,
    HttpModule,
    NgbModalModule,
    NgbDropdownModule,
    NgbPopoverModule,
    DataTableModule,
    JWBootstrapSwitchModule,
  ],

  declarations: [
    Usuarios,
    UserModal,
    DataFilterPipe,
    FormListComponent,
  ],

  entryComponents: [
    UserModal,
  ],

  providers: [
    UsuariosService,
  ],

})
export class UsuariosModule {
}
