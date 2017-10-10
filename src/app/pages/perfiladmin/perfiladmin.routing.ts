import { Routes, RouterModule } from '@angular/router';
import { PerfilAdmin } from './perfiladmin.component';
import { ModuleWithProviders, NgModule } from '@angular/core';


const routes: Routes = [
  {
    path: '',
    component: PerfilAdmin,
    data: {
      title: 'PerfilAdmin'
    }
  }
];
/*
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PerfilAdminModule{}
*/

export const routing: ModuleWithProviders = RouterModule.forChild(routes);

