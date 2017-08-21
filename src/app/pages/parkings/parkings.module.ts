
import { FormListComponent } from './edit-modal/form-list/form-list.component';
import { TodoListComponent } from './edit-modal/todo-list/todo-list.component';
import { TodoFormComponent } from './edit-modal/todo-form/todo-form.component';
import { ZonaParking1 } from './edit-modal/zonaParking1/leafletMaps.component';

import { EditModal } from './edit-modal/edit-modal.component';
import { NgbModalModule, NgbDropdownModule, NgbPopoverModule } from '@ng-bootstrap/ng-bootstrap';


import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { HttpModule } from '@angular/http';

import { DataTableModule } from 'angular2-datatable';

import { routing } from './parkings.routing';
import { Parkings } from './parkings.component';
import { ParkingsService } from './parkings.service';
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
  ],

  declarations: [
    Parkings,
    EditModal,
    DataFilterPipe,
    ZonaParking1,

    TodoFormComponent, 
    TodoListComponent,
    
    FormListComponent,

  ],

  entryComponents: [
    EditModal,
  ],

  providers: [
    ParkingsService,
  ],

})
export class ParkingsModule {
}
