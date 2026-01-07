import { Component, forwardRef } from '@angular/core';
import { CrearCategoriaDTO } from '../../categorias/crear-categorias/categoria';
import { Emails } from '../crear-emails/emails';
import { CrearCorreoDTO } from '../correo';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-formulario-email',
  imports: [Emails],
  templateUrl: './formulario-email.html',
  styleUrl: './formulario-email.css',
  providers:[{
    provide: NG_VALUE_ACCESSOR,
      useExisting:forwardRef(() => FormularioEmail),
      multi:true

  }]
})
export class FormularioEmail {

  agregarCorreo(correo: CrearCorreoDTO){console.log("Creando Email", correo)}

}
