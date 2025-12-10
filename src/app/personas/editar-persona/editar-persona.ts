import { Component, Input, numberAttribute } from '@angular/core';
import { CrearPersonaDTO, PersonaDTO } from '../crear-persona/personas';
import { CrearPersona } from "../crear-persona/crear-persona";

@Component({
  selector: 'app-editar-persona',
  imports: [CrearPersona],
  templateUrl: './editar-persona.html',
  styleUrl: './editar-persona.css',
})
export class EditarPersona {
  @Input({transform: numberAttribute})
  id!:number

  persona: PersonaDTO = {id:1, nombre:'Ramon', apellido:'Sanchez', cedula:'125568'}

  guardarCambios(persona:CrearPersonaDTO){
    console.log('editando la perosna',persona)
  }

}
