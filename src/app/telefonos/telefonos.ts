import { Component, EventEmitter, inject, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterLink } from '@angular/router';
import { CrearTelefonoDTO, TelefonoDTO } from './telefono';
import { primeraLetraMayuscula } from '../compartidos/funciones/validaciones';
import { CrearCategoriaDTO } from '../categorias/crear-categorias/categoria';
import { MatAutocompleteModule, MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatTable, MatTableModule } from '@angular/material/table';
import { FormUtilidades } from '../compartidos/componentes/form-utilidades';

@Component({
  selector: 'app-telefonos',
  //imports: [MatButtonModule, MatFormFieldModule, ReactiveFormsModule, MatInputModule,],
  imports: [ReactiveFormsModule, MatFormFieldModule, FormsModule, MatInputModule, MatAutocompleteModule, MatTableModule,MatButtonModule],
  templateUrl: './telefonos.html',
  styleUrl: './telefonos.css',
})
export class Telefonos {

  // ngOnInit(): void {
  //   if (this.modelo !== undefined) {
  //     this.form.patchValue(this.modelo)
  //   }
  // }

  // private fb = inject(FormBuilder)

  // @Input()
  // modelo?: TelefonoDTO

  // @Output()
  // postFormulario = new EventEmitter<CrearTelefonoDTO>

  // form = this.fb.group({
  //   Tipo:['',{validators: [Validators.required,primeraLetraMayuscula()]}],
  //   CodigoPais:['',{validators:[Validators.required]}],
  //   Numero:[0,{validators:[Validators.required,Validators.min(1)]}]
  // })

  // obtenerErrorTipo():string{
  //   let Tipo = this.form.controls.Tipo

  //   if(Tipo.hasError('required')){
  //     return "El Campo Tipo es Requerido"
  //   }
  //   if(Tipo.hasError('primeraLetraMayuscula')){
  //     return Tipo.getError('primeraLetraMayuscula').mensaje
  //   }
  //   return ""
  // }

  // obtenerErrorCodigoPais():string{
  //   let CodigoPais = this.form.controls.CodigoPais

  //   if(CodigoPais.hasError('required')){
  //     return "El Campo Codigo Pais es Requerido"
  //   }
  //   return ""
  // }
  // guardarCambios(){
  //   if (!this.form.valid) {
  //     return
  //   }
  //   const telefono = this.form.value as CrearTelefonoDTO
  //   this.postFormulario.emit(telefono)

  // }

  private fb = inject(FormBuilder)
  formUtilidades = FormUtilidades

  form = this.fb.group({
    tipo:['',[Validators.required, Validators.minLength(3)]],
    codigopais:['',[Validators.required, Validators.minLength(3)]],
    numero:[0,[Validators.required,Validators.min(1)]],

  })
  guardarCambios(){

    if (this.form.invalid) {
      this.form.markAllAsTouched()
      return
    }
    console.log(this.form.value)
    
  }





}
