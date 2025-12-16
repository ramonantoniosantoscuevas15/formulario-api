import { Component } from '@angular/core';
import { CrearCategoriaDTO } from '../../categorias/crear-categorias/categoria';
import { Emails } from "../crear-emails/emails";
import { CrearCorreoDTO } from '../correo';

@Component({
  selector: 'app-formulario-email',
  imports: [Emails],
  templateUrl: './formulario-email.html',
  styleUrl: './formulario-email.css',
})
export class FormularioEmail {
  //guardarCambios(email: CrearCorreoDTO){console.log("Creando Email", email)}

}
