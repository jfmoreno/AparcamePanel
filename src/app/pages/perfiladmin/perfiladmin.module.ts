import { ImgAdmin } from './imgadmin/imgadmin.component';
import { DataTableModule } from 'angular2-datatable';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NgbModalModule, NgbDropdownModule, NgbPopoverModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpModule } from '@angular/http';
import { NgaModule } from './../../theme/nga.module';
import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PerfilAdmin } from './perfiladmin.component';
import { routing } from './perfiladmin.routing';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgaModule,
    routing,
    HttpModule,
    NgbModalModule,
    NgbDropdownModule,
    NgbPopoverModule,
    Ng2SmartTableModule,
    DataTableModule,

  ],
  declarations: [
    PerfilAdmin,
    ImgAdmin,
  ]
})
export class PerfilAdminModule {}