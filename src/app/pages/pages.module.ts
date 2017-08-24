import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { routing } from './pages.routing';
import { NgaModule } from '../theme/nga.module';
import { FormsModule } from '@angular/forms';
import { AppTranslationModule } from '../app.translation.module';


import { Pages } from './pages.component';

@NgModule({
  imports: [CommonModule, AppTranslationModule, NgaModule, routing, FormsModule],
  declarations: [
    Pages,
  ],
})
export class PagesModule {
}
