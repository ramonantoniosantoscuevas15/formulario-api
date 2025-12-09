import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router, RouterLink } from '@angular/router';
import { primeraLetraMayuscula } from '../../compartidos/funciones/validaciones';


@Component({
  selector: 'app-crear-persona',
  imports: [MatButtonModule,RouterLink,MatFormFieldModule,ReactiveFormsModule,MatInputModule],
  templateUrl: './crear-persona.html',
  styleUrl: './crear-persona.css',
})
export class CrearPersona {
  private router = inject(Router)
  private fb = inject(FormBuilder)
  form = this.fb.group({
    nombre:['',{validators:[Validators.required,primeraLetraMayuscula()]}]
  })

  obtenerErrorNombre(): string{
    let nombre = this.form.controls.nombre

    if(nombre.hasError('required')){
      return "El Campo Nombre es Requerido"
    }
    if(nombre.hasError('primeraLetraMayuscula')){
      return nombre.getError('primeraLetraMayuscula').mensaje
    }
    return ""

  }

  guardarCambios(){
    this.router.navigate(['/landing'])

  }

}
