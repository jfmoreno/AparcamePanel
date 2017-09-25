import {Component} from '@angular/core';
import {BaThemeConfigProvider} from '../../../theme';

import {TareasService} from './tareas.service';

@Component({
  selector: 'tareas',
  templateUrl: './tareas.html',
  styleUrls: ['./tareas.scss']
})
export class Tareas {

  public dashboardColors = this._baConfig.get().colors.dashboard;

  public todoList:Array<any>;
  public newTodoText:string = '';

  constructor(private _baConfig:BaThemeConfigProvider, private _todoService:TareasService) {
    this.todoList = this._todoService.getTodoList();

    this.todoList.forEach((item) => {
      item.color = this._getRandomColor();
    });
  }

  getNotDeleted() {
    return this.todoList.filter((item:any) => {
      return !item.deleted
    })
  }

  addToDoItem($event) {

    if (($event.which === 1 || $event.which === 13) && this.newTodoText.trim() != '') {

      this.todoList.unshift({
        text: this.newTodoText,
        color: this._getRandomColor(),
      });
      this.newTodoText = '';
    }
  }

  private _getRandomColor() {
    let colors = Object.keys(this.dashboardColors).map(key => this.dashboardColors[key]);

    var i = Math.floor(Math.random() * (colors.length - 1));
    return colors[i];
  }
}