import { Component } from '@angular/core';
import { CrearPersona } from "../crear-persona/crear-persona";
import { CrearPersonaDTO } from '../crear-persona/personas';
import { SelectorMultipleDTO } from '../../compartidos/componentes/selector-multiple/SelectorMultipleModelo';

@Component({
  selector: 'app-formulario-personas',
  imports: [CrearPersona],
  templateUrl: './formulario-personas.html',
  styleUrl: './formulario-personas.css',
})
export class FormularioPersonas {
  categoriasSeleccionadas : SelectorMultipleDTO[] = []
  categoriasNoSeleccionadas : SelectorMultipleDTO[] = [
    {llave: 1, valor: 'Empleado Mision'},
    {llave: 2, valor: 'Visitante'},
    {llave: 3, valor: 'Empleado'},
  ]
  guardarCambios(persona: CrearPersonaDTO){
    console.log("Se creo la Persona", persona)

  }


}
