import { Component } from '@angular/core';
import { Dirreciones } from "../dirreciones";
import { CrearDirrecionDTO } from '../direccion';

@Component({
  selector: 'app-formulario-dirreciones',
  imports: [Dirreciones],
  templateUrl: './formulario-dirreciones.html',
  styleUrl: './formulario-dirreciones.css',
})
export class FormularioDirreciones {
  guardarDirrecion(dirreciones:CrearDirrecionDTO){
    console.log('Creando dirrecione',dirreciones,'Cambios Guardados')

  }

}
