import { Component, Input, numberAttribute } from '@angular/core';
import { CrearPersonaDTO, PersonaDTO } from '../crear-persona/personas';
import { CrearPersona } from "../crear-persona/crear-persona";
import { SelectorMultipleDTO } from '../../compartidos/componentes/selector-multiple/SelectorMultipleModelo';
import { AutocompleCorreos } from '../../emails/autocomple-correos/autocomple-correos';
import { AutocompleCorreosDTO, CrearCorreoDTO } from '../../emails/correo';
import { CrearTelefonoDTO } from '../../telefonos/telefono';

@Component({
  selector: 'app-editar-persona',
  imports: [CrearPersona],
  templateUrl: './editar-persona.html',
  styleUrl: './editar-persona.css',
})
export class EditarPersona {
  @Input({ transform: numberAttribute })
  id!: number

  persona: PersonaDTO = { id: 1, nombre: 'Ramon', apellido: 'Sanchez', cedula: '125568' }

  categoriasSeleccionadas: SelectorMultipleDTO[] = [
    { llave: 2, valor: 'Visitante' },
  ]
  categoriasNoSeleccionadas: SelectorMultipleDTO[] = [
    { llave: 1, valor: 'Empleado Mision' },
    { llave: 3, valor: 'Empleado' },
  ]
  //correosSelecionandos:AutocompleCorreosDTO[]=[{ nombre:"ramon",correos:"dgfh@gmailcom" }]
  correosAgregados:CrearCorreoDTO[] =[{
    correo:"dgfh@gmailcom"
  }]

  telefonosAgregados: CrearTelefonoDTO[] = [{
    Tipo:"Trabajo",
    CodigoPais:"+809",
    Numero:151030
  }]

  guardarCambios(persona: CrearPersonaDTO) {
    console.log('editando la perosna', persona)
  }

}
