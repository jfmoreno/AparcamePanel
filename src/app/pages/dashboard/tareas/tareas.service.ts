import {Injectable} from '@angular/core';

@Injectable()

export class TareasService {

  private _todoList = [
    { text: 'Hacer Ofertas' },
    { text: 'Añadir Clientes' },
    { text: 'Añadir Parkings' },
    { text: 'Subir Web' },
    { text: 'Terminar App en IOS' },
    { text: 'Terminar App en Android' },
    { text: 'Terminar Plan de Empresa' },
    { text: 'Subir CMS' },
    { text: 'Hacer SEO de la Web' },
  ];

  getTodoList() {
    return this._todoList;
  }
}
