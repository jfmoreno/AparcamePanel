import { Component, Output, EventEmitter } from '@angular/core';
import { Post } from '../edit-post';

@Component({
    moduleId: module.id,
    selector: 'todo-form',
    templateUrl: 'todo-form.html',
    styleUrls: [('./todo-form.scss')],
})
export class TodoFormComponent
{
    @Output() onSubmit = new EventEmitter<any>();
    longitud: string;
    latitud: string;

    public submit()
    {
        //Campos que paso por el formulario
        this.onSubmit.emit(this.longitud);
        this.onSubmit.emit(this.latitud);

        //una vez escritos en el input, limpio el input
        this.longitud = '';
        this.latitud = '';
    }
}
