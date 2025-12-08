import { Component, Input, numberAttribute } from '@angular/core';

@Component({
  selector: 'app-editar-persona',
  imports: [],
  templateUrl: './editar-persona.html',
  styleUrl: './editar-persona.css',
})
export class EditarPersona {
  @Input({transform: numberAttribute})
  id!:number

}
