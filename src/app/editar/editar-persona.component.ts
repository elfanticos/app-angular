import {Component, Input} from '@angular/core';

@Component({
    selector : 'editar-persona',
    templateUrl :'editar-persona.component.html',
    styleUrls : ['editar-persona.component.css']
})

export class EditarPersonaComponent {
    @Input () data;
    constructor() {

    }
}