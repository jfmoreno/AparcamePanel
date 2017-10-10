import {Injectable} from '@angular/core';
import {BaThemeConfigProvider} from '../../../theme';

@Injectable()
export class CalendarService {

  constructor(private _baConfig:BaThemeConfigProvider) {
  }

  
  getData() {

    let dashboardColors = this._baConfig.get().colors.dashboard;
    return {
      header: {
        left: 'prev,next today',
        center: this.newFunction(),
        right: 'month,agendaWeek,agendaDay'
      },
      defaultDate: '2017-09-08',
      selectable: true,
      selectHelper: true,
      editable: true,
      eventLimit: true,
      events: [
        {
          title: 'Visita a Clientes',
          start: '2017-09-29',
          color: dashboardColors.silverTree
        },
        {
          title: 'Tutoria Miguel A.',
          start: '2017-10-05T10:00:00',
          color: dashboardColors.blueStone
        },
        {
          title: 'Tutoria Tutor TFG',
          start: '2017-01-10',
          end: '2017-01-12',
          color: dashboardColors.surfieGreen
        },
        {
          title: 'Birthday Party',
          start: '2016-04-01T07:00:00',
          color: dashboardColors.gossip
        }
      ]
    };
  }

    private newFunction() {
        return 'title';
    }
}
