import { Component, Input } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'todo-list',
    templateUrl: 'todo-list.html',
    styleUrls: [('./todo-list.scss')],
})
export class TodoListComponent
{
    @Input() longitudes;
    @Input() latitudes;
    
    displayLongitud(longitud: string): void {
        console.log(longitud);
    }
    displayLatitud(latitud: string): void {
        console.log(latitud);
    }
}
