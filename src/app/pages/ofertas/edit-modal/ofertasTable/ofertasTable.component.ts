import { OfertasService } from './../../ofertas.service';
import {Component} from '@angular/core';


@Component({
  selector: 'ofertas-table',
  templateUrl: './ofertasTable.html',
  styleUrls: ['./ofertasTable.scss'],
})
export class OfertasTable {

  ofertasTableData:Array<any>;
  constructor(private _basicTablesService: OfertasService) {
    this.ofertasTableData = _basicTablesService.ofertasTable;
  }





  
}
