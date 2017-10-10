import { Injectable } from '@angular/core';

import { BaThemeConfigProvider } from '../../../../theme';

@Injectable()
export class ChartistJsService {

  private _data = {

    
    stackedBarData: {
      labels: ['L', 'M', 'X', 'J', 'V', 'S', 'D'],
      series: [
        //Hasta 60
        [50, 0, 0, 0, 0, 30, 30],
        //de 61 a 120
        [0, 0, 100, 0, 119, 0, 0],
        //Encima de 120
        [0, 180, 0, 160, 0, 0, 0],
      ],
    },
    stackedBarOptions: {
      height: '300px',
      fullWidth: true,
      high: 200,

      stackBars: true, //Agrupar todo en una barra
      
      /*
      axisY: {
        labelInterpolationFnc: function (value) {
          return (value / 10) + 'h';
        },
      },
      */
      
    },

/*
          height: '500px',
      high: 3,
      low: -3,
      showArea: true,
      showLine: false,
      showPoint: false,
      fullWidth: true,
      axisX: {
        showGrid: false,
      },
*/
    
  };

  constructor(private _baConfig: BaThemeConfigProvider) {
  }

  public getAll() {
    return this._data;
  }

  public getResponsive(padding, offset) {
    return [
      ['screen and (min-width: 1550px)', {
        chartPadding: padding,
        labelOffset: offset,
        labelDirection: 'explode',
        labelInterpolationFnc: function (value) {
          return value;
        },
      }],
      ['screen and (max-width: 1200px)', {
        chartPadding: padding,
        labelOffset: offset,
        labelDirection: 'explode',
        labelInterpolationFnc: function (value) {
          return value;
        },
      }],
      ['screen and (max-width: 600px)', {
        chartPadding: 0,
        labelOffset: 0,
        labelInterpolationFnc: function (value) {
          return value[0];
        },
      }],
    ];
  }
}
