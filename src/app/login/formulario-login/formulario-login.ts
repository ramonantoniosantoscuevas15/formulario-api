import { Component, inject } from '@angular/core';
import { Seguridad } from '../../security/seguridad';
import { Router } from '@angular/router';
import { CrearCategoriaDTO } from '../../categorias/crear-categorias/categoria';
import { CredencialesUsuariodto } from '../../security/seguridaddto';
import { Login } from "../login";

@Component({
  selector: 'app-formulario-login',
  imports: [Login],
  templateUrl: './formulario-login.html',
})
export class FormularioLogin {
  seguridadServices = inject(Seguridad)
  router = inject(Router)
   guardarlogin(credenciales:CredencialesUsuariodto){
    this.seguridadServices.login(credenciales).subscribe({
      next:()=>{
        this.router.navigate(['/'])
      }
    })

   }
}
