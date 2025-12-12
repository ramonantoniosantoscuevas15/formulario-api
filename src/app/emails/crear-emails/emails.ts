import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators, ɵInternalFormsSharedModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatFormField, MatInput, MatInputModule } from '@angular/material/input';
import { CorreoDTO, CrearCorreoDTO } from '../correo';
import { CrearCategoriaDTO } from '../../categorias/crear-categorias/categoria';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-emails',
  imports: [MatFormFieldModule, ɵInternalFormsSharedModule, ReactiveFormsModule,MatInputModule,MatButtonModule],
  templateUrl: './emails.html',
  styleUrl: './emails.css',
})
export class Emails implements OnInit {
   ngOnInit(): void {
     if (this.modelo !== undefined) {
      this.form.patchValue(this.modelo)
    }
  }
  private fb = inject(FormBuilder)
  @Input()
  modelo?:CorreoDTO

  @Output()
  postFormulario = new EventEmitter<CrearCorreoDTO>
  form = this.fb.group({
    correos:['',{validators:[Validators.required,Validators.email]}]
  })

  obtenerErrorCorreo():string{
    let correo = this.form.controls.correos

    if(correo.hasError('required')){
      return"El Campo Correo Es Requerido"

    }
    if(correo.touched && correo.invalid){
      return "Es Necesario un @"
    }
    return""
  }

  guardarCambios(){

  }



}
