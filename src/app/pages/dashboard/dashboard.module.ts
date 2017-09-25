

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppTranslationModule } from '../../app.translation.module';
import { NgaModule } from '../../theme/nga.module';

import { Dashboard } from './dashboard.component';
import { routing } from './dashboard.routing';

//import { PopularApp } from './popularApp';
//import { TrafficChart } from './trafficChart';
//import { UsersMap } from './usersMap';
//import { LineChart } from './lineChart';
//import { Feed } from './feed';
//import { FeedService } from './feed/feed.service';
//import { LineChartService } from './lineChart/lineChart.service';
//import { TrafficChartService } from './trafficChart/trafficChart.service';
//import { UsersMapService } from './usersMap/usersMap.service';

import { PieChart } from './pieChart';
import { Calendar } from './calendar';
import { CalendarService } from './calendar/calendar.service';
import { Tareas } from './tareas';
import { TareasService } from './tareas/tareas.service';
import { ZonasParkings } from './zonasParkings/leafletMaps.component';
import { PieChartService } from './pieChart/pieChart.service';
import { UserMonth } from 'app/pages/dashboard/userMonth';
import { UserMonthService } from 'app/pages/dashboard/userMonth/userMonth.service';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AppTranslationModule,
    NgaModule,
    routing,
  ],
  declarations: [
    //PopularApp,
    PieChart,
    UserMonth,
    //TrafficChart,
    //UsersMap,
    //LineChart,
    Dashboard,
    ZonasParkings,
    //Feed,
    Tareas,
    Calendar,
  ],
  providers: [
    //LineChartService,
    PieChartService,
    UserMonthService,
    CalendarService,
    //FeedService,
    TareasService,
    //TrafficChartService,
    //UsersMapService,
  ],
})
export class DashboardModule {}
