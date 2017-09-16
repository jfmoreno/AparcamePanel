import { UsuariosService } from './../../usuarios.service';
import {Component} from '@angular/core';


@Component({
  selector: 'historial-table',
  templateUrl: './historialTable.html',
  styleUrls: ['./historialTable.scss'],
})
export class HistorialTable {

  historialTableData:Array<any>;
  constructor(private _basicTablesService: UsuariosService) {
    this.historialTableData = _basicTablesService.historialTable;
  }





  
}
