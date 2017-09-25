
import { AddModal } from './add-modal/add-modal.component';
import { ImgParking2 } from './add-modal/imgParking2/imgParking2.component';
import { EditModal } from './edit-modal/edit-modal.component';
import { ImgParking } from './edit-modal/imgParking/imgParking.component';
import { OfertasTable } from './edit-modal/ofertasTable/ofertasTable.component';


import { NgbModalModule, NgbDropdownModule, NgbPopoverModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { HttpModule } from '@angular/http';

import { DataTableModule } from 'angular2-datatable';

import { routing } from './ofertas.routing';
import { Ofertas } from './ofertas.component';
import { OfertasService } from './ofertas.service';
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
    Ofertas,
    EditModal,
    DataFilterPipe,
    ImgParking,    
    OfertasTable,
    AddModal,
    ImgParking2,    
  ],

  entryComponents: [
    EditModal,
    AddModal,
  ],

  providers: [
    OfertasService,
  ],

})
export class OfertasModule {
}
