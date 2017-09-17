import {Injectable} from '@angular/core';
import {BaThemeConfigProvider, colorHelper} from '../../../theme';

@Injectable()
export class PieChartService {

  constructor(private _baConfig:BaThemeConfigProvider) {
  }

  getData() {
    let pieColor = this._baConfig.get().colors.custom.dashboardPieChart;
    return [
      {
        color: pieColor,
        description: 'Usuarios Totales',
        stats: '5.000',
        icon: 'person',
      }, {
        color: pieColor,
        description: 'Parkings',
        stats: '5',
        icon: 'parkings',
      }, {
        color: pieColor,
        description: 'Plazas Totales',
        stats: '10.000',
        icon: 'plazastotales',
      }, {
        color: pieColor,
        description: 'Plazas Libres',
        stats: '700',
        icon: 'plazaslibres',
      },
    ];
  }
}
