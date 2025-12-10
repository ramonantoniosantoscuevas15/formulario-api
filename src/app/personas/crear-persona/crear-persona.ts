import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router, RouterLink } from '@angular/router';
import { primeraLetraMayuscula } from '../../compartidos/funciones/validaciones';
import { CrearPersonaDTO, PersonaDTO } from './personas';


@Component({
  selector: 'app-crear-persona',
  imports: [MatButtonModule,RouterLink,MatFormFieldModule,ReactiveFormsModule,MatInputModule],
  templateUrl: './crear-persona.html',
  styleUrl: './crear-persona.css',
})
export class CrearPersona implements OnInit {
  ngOnInit(): void {
    if(this.modelo !== undefined){
      this.form.patchValue(this.modelo)
    }
  }
  private router = inject(Router)
  private fb = inject(FormBuilder)
  @Input()
  modelo?: PersonaDTO
  @Output()
  postFormulario = new EventEmitter<CrearPersonaDTO>
  form = this.fb.group({
    nombre:['',{validators:[Validators.required,primeraLetraMayuscula()]}],
    apellido:['',{validators:[Validators.required,primeraLetraMayuscula()]}],
    cedula:['',{validators:[Validators.required]}]
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
  obtenerErrorApellido(): string{
    let apellido = this.form.controls.apellido

    if(apellido.hasError('required')){
      return "El Campo Apellido es Requerido"
    }
    if(apellido.hasError('primeraLetraMayuscula')){
      return apellido.getError('primeraLetraMayuscula').mesaje
    }
    return ""
  }
  obtenerErrorCedula(): string{
    let cedula = this.form.controls.cedula

    if(cedula.hasError('required')){
      return "El Campo Cedula es Requerido"

    }
    return""


  }

  guardarCambios(){
    if(!this.form.valid){
      return
    }
    const persona = this.form.value as CrearPersonaDTO

    this.postFormulario.emit(persona)

  }

}
