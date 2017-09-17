import {Component} from '@angular/core';

import {UserMonthService} from './userMonth.service';

@Component({
  selector: 'user-by-month',
  templateUrl: './userMonth.html',
  styleUrls: ['./userMonth.scss']
})

export class UserMonth {

  data:any;

  constructor(private _chartistJsService:UserMonthService) {
  }

  ngOnInit() {
    this.data = this._chartistJsService.getAll();
  }

  getResponsive(padding, offset) {
    return this._chartistJsService.getResponsive(padding, offset);
  }
}
