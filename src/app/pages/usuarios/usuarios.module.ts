import { FavoritosTable } from './user-modal/favoritosTable/favoritosTable.component';
import { HistorialTable } from './user-modal/historialTable/historialTable.component';
import { AparcaTable } from './user-modal/aparcaTable/aparcaTable.component';
import { UserModal } from './user-modal/user-modal.component';
import { NgbModalModule, NgbDropdownModule, NgbPopoverModule } from '@ng-bootstrap/ng-bootstrap';

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
import {TabsModule} from "ngx-tabs";

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
    TabsModule,
  ],

  declarations: [
    Usuarios,
    UserModal,
    DataFilterPipe,
    AparcaTable,
    HistorialTable,
    FavoritosTable,
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
