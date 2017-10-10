import { EstadisticasModal } from './estadisticas/estadisticas-modal.component';
import { PieChart } from './estadisticas/pieChart1/pieChart.component';
import { ZonaParking3 } from './estadisticas/zonaParking3/leafletMaps.component';
import { ChartistJs } from './estadisticas/chartistJs1/chartistJs.component';
import { PieChartService } from './estadisticas/pieChart1/pieChart.service';
import { ChartistJsService } from './estadisticas/chartistJs1/chartistJs.service';

import { AddModal } from './add-modal/add-modal.component';
import { ImgParking2 } from './add-modal/imgParking2/imgParking2.component';
import { ZonaParking2 } from './add-modal/zonaParking2/leafletMaps.component';
import { FormList2Component } from './add-modal/form-list2/form-list2.component';

import { EditModal } from './edit-modal/edit-modal.component';
import { ImgParking } from './edit-modal/imgParking/imgParking.component';
import { FormListComponent } from './edit-modal/form-list/form-list.component';
import { ZonaParking1 } from './edit-modal/zonaParking1/leafletMaps.component';



import { TodoListComponent } from './edit-modal/todo-list/todo-list.component';
import { TodoFormComponent } from './edit-modal/todo-form/todo-form.component';


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
    EditModal,
    Parkings,
    DataFilterPipe,
    ZonaParking1,
    ImgParking,    
    FormListComponent,

    TodoFormComponent, 
    TodoListComponent,

    AddModal,
    ZonaParking2,
    ImgParking2,    
    FormList2Component,


    EstadisticasModal,
    PieChart,
    ZonaParking3,
    ChartistJs,
  ],

  entryComponents: [
    EditModal,
    AddModal,
    EstadisticasModal,
  ],

  providers: [
    ParkingsService,
    PieChartService,
    ChartistJsService,
  ],

})
export class ParkingsModule {
}


