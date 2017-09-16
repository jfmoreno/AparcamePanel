import { UsuariosService } from './../../usuarios.service';
import {Component} from '@angular/core';


@Component({
  selector: 'aparcamientos-table',
  templateUrl: './aparcaTable.html',
  styleUrls: ['./aparcaTable.scss'],
})
export class AparcaTable {

  aparcTableData:Array<any>;
  constructor(private _basicTablesService: UsuariosService) {
    this.aparcTableData = _basicTablesService.aparcTableData;
  }
  
}
