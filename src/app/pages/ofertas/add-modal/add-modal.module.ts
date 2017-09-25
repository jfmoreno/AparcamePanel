
import { AddModal } from './add-modal.component';
import { ImgParking2 } from './imgParking2/imgParking2.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgaModule } from '../../../theme/nga.module';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { NgbDropdownModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

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
    

  ],

  declarations: [
    AddModal,
    ImgParking2,
  ],

  entryComponents: [
  ],

  providers: [
  ],
})
export class EditModalModule {
}

