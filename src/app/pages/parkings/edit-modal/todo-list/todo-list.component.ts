import { Component, Input } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'todo-list',
    templateUrl: 'todo-list.html',
    styleUrls: [('./todo-list.scss')],
})
export class TodoListComponent
{
    @Input() latitudes;
    @Input() longitudes;

    displayLatitud(latitud: string): void {
        console.log(latitud);
    }
    displayLongitud(longitud: string): void {
        console.log(longitud);
    }
}
