import { UsuariosService } from './../../usuarios.service';
import {Component} from '@angular/core';


@Component({
  selector: 'favoritos-table',
  templateUrl: './favoritosTable.html',
  styleUrls: ['./favoritosTable.scss'],
})
export class FavoritosTable {

  historialTableData:Array<any>;
  constructor(private _basicTablesService: UsuariosService) {
    this.historialTableData = _basicTablesService.historialTable;
  }





  
}
