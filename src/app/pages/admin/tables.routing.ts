import { Routes, RouterModule } from '@angular/router';
import { AdminTables } from './adminTables.component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: AdminTables,
    children: [
      //{ path: 'smarttables', component: SmartTables },
    ],
  },
];

export const routing = RouterModule.forChild(routes);
