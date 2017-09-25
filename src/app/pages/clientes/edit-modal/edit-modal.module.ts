
//PARKING 1 ECONOMIA
import { ZonaParking1 } from './zonaParking1/leafletMaps.component';
import { EditModal } from './edit-modal.component';
import { OfertasTable } from './ofertasTable/ofertasTable.component';
import { ImgParking } from './imgParking/imgParking.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgaModule } from '../../../theme/nga.module';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { NgbDropdownModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { TabsModule } from 'ngx-tabs';
//import { routing } from './pEstadisticas.routing';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgaModule,
    NgbDropdownModule,
    NgbModalModule,
    SlimLoadingBarModule.forRoot(),
    TabsModule,

  ],

  declarations: [
    //PARKING 1
    ZonaParking1,
    EditModal,
    ImgParking,
    OfertasTable,
  ],

  entryComponents: [
  ],

  providers: [
  ],
})
export class EditModalModule {
}

