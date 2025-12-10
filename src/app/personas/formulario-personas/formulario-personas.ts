import { Component } from '@angular/core';
import { CrearPersona } from "../crear-persona/crear-persona";
import { CrearPersonaDTO } from '../crear-persona/personas';

@Component({
  selector: 'app-formulario-personas',
  imports: [CrearPersona],
  templateUrl: './formulario-personas.html',
  styleUrl: './formulario-personas.css',
})
export class FormularioPersonas {
  guardarCambios(persona: CrearPersonaDTO){
    console.log("Se creo la Persona", persona)

  }


}
