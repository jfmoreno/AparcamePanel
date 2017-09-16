import { ImgParking } from './imgParking/imgParking.component';

import { FormListComponent } from './form-list/form-list.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoFormComponent } from './todo-form/todo-form.component';

//PARKING 1 ECONOMIA
import { ZonaParking1 } from './zonaParking1/leafletMaps.component';
import { EditModal } from './edit-modal.component';


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
    //PARKING 1
    ZonaParking1,
    EditModal,
    TodoFormComponent, 
    TodoListComponent,
    ImgParking,
    
    FormListComponent,

  ],

  entryComponents: [
  ],

  providers: [
  ],
})
export class EditModalModule {
}

