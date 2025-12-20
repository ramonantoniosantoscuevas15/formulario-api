import { Component } from '@angular/core';
import { CrearTelefonoDTO } from '../telefono';
import { Telefonos } from "../telefonos";

@Component({
  selector: 'app-formulario-telefonos',
  imports: [],
  templateUrl: './formulario-telefonos.html',
  styleUrl: './formulario-telefonos.css',
})
export class FormularioTelefonos {
  guardarCambios(telefono: CrearTelefonoDTO){
      console.log("Creando Telefono", telefono)
    }

}
