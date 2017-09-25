
import { AddModal } from './add-modal/add-modal.component';
import { ImgParking2 } from './add-modal/imgParking2/imgParking2.component';
import { ZonaParking2 } from './add-modal/zonaParking2/leafletMaps.component';
import { EditModal } from './edit-modal/edit-modal.component';
import { ImgParking } from './edit-modal/imgParking/imgParking.component';
import { ZonaParking1 } from './edit-modal/zonaParking1/leafletMaps.component';
import { OfertasTable } from './edit-modal/ofertasTable/ofertasTable.component';


import { NgbModalModule, NgbDropdownModule, NgbPopoverModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { HttpModule } from '@angular/http';

import { DataTableModule } from 'angular2-datatable';

import { routing } from './clientes.routing';
import { Clientes } from './clientes.component';
import { ClientesService } from './clientes.service';
import { DataFilterPipe } from './data-filter.pipe';
import { TabsModule } from 'ngx-tabs';

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
    Clientes,
    EditModal,
    DataFilterPipe,
    ZonaParking1,
    ImgParking,    
    OfertasTable,
    AddModal,
    ZonaParking2,
    ImgParking2,    
  ],

  entryComponents: [
    EditModal,
    AddModal,
  ],

  providers: [
    ClientesService,
  ],

})
export class ClientesModule {
}
