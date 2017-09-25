import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { Ofertas } from './ofertas.component';
//import { SmartTables } from './smartTables/smartTables.component';
//import { BasicTables } from './components/basicTables/basicTables.component';
//import { DataTables } from './components/dataTables/dataTables.component';
//import { HotTablesComponent } from './components/hotTables/hotTables.component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: Ofertas,
    children: [
      //{ path: 'basictables', component: BasicTables },
      //{ path: 'smarttables', component: SmartTables },
      //{ path: 'datatables', component: DataTables },
      //{ path: 'hottables', component: HotTablesComponent }
    ],
  },
  
];

export const routing = RouterModule.forChild(routes);
