import { FavoritosTable } from './favoritosTable/favoritosTable.component';
import { HistorialTable } from './historialTable/historialTable.component';
import { AparcaTable } from './aparcaTable/aparcaTable.component';
import { UserModal } from './user-modal.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgaModule } from '../../../theme/nga.module';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { NgbDropdownModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import {TabsModule} from "ngx-tabs";

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
    UserModal,
    AparcaTable,
    HistorialTable,
    FavoritosTable,
  ],

  entryComponents: [
  ],

  providers: [
  ],
})
export class UserModalModule {
}

