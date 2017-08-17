
//PARKING 1 ECONOMIA
import { ZonaParking1 } from './zonaParking1/leafletMaps.component';
import { EditModal } from './edit-modal.component';


import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../../theme/nga.module';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { NgbDropdownModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

//import { routing } from './pEstadisticas.routing';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    NgbDropdownModule,
    NgbModalModule,
    SlimLoadingBarModule.forRoot(),

  ],

  declarations: [
    //PARKING 1
    ZonaParking1,
    EditModal,
  ],

  entryComponents: [
  ],

  providers: [
  ],
})
export class EditModalModule {
}

