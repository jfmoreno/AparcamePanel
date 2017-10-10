import { Injectable } from '@angular/core';
import { BaThemeConfigProvider, colorHelper } from '../../../../theme';

@Injectable()
export class PieChartService {

  constructor(private _baConfig:BaThemeConfigProvider) {
  }

  getData() {
    // tslint:disable-next-line:prefer-const
    let pieColor = this._baConfig.get().colors.custom.dashboardPieChart;
    return [
       {
        color: pieColor,
        description: 'Plazas Totales',
        stats: '200',
        icon: 'plazastotales',
      }, {
        color: pieColor,
        description: 'Plazas',
        stats: ' 130 / 194',
        icon: 'plazaslibres',
      }, {
        color: pieColor,
        description: 'Plazas Adaptadas',
        stats: '2 / 6',
        icon: 'minusvalido',
      }, {
        color: pieColor,
        description: 'Plazas Electricas',
        stats: '0 / 0',
        icon: 'electricos',
      },
    ];
  }
  
}
