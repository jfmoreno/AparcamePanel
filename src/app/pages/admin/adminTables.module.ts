import { DefaultModal } from './default-modal/default-modal.component';
import { NgbDropdownModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { DataTableModule } from 'angular2-datatable';
import { HttpModule } from '@angular/http';
import { HotTable, HotTableModule } from 'ng2-handsontable';


import { routing } from './tables.routing';
import { AdminTables } from './adminTables.component';


import { AdminTablesService } from './adminTables.service';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    routing,
    Ng2SmartTableModule,
    DataTableModule,
    HttpModule,
    HotTableModule,
    NgbDropdownModule,
    NgbModalModule,
  ],
  declarations: [
    AdminTables,
     DefaultModal,
  ],
  entryComponents: [
    DefaultModal,
  ],
  providers: [
    AdminTablesService,
  ],
})
export class AdminTablesModule {
}
