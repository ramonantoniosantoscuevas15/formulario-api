import { Component, EventEmitter, forwardRef, inject, Input, OnInit, Output, ViewChild } from '@angular/core';
import { AbstractControl, ControlValueAccessor, FormBuilder, FormControl, FormsModule, NG_VALIDATORS, NG_VALUE_ACCESSOR, ReactiveFormsModule, ValidationErrors, Validator, Validators } from '@angular/forms';
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
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-telefonos',
  //imports: [MatButtonModule, MatFormFieldModule, ReactiveFormsModule, MatInputModule,],
  imports: [ReactiveFormsModule, MatFormFieldModule, FormsModule, MatInputModule, MatAutocompleteModule, MatTableModule,MatButtonModule],
  templateUrl: './telefonos.html',
  styleUrl: './telefonos.css',
  providers:[
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting:forwardRef(() => Telefonos),
      multi:true

    },
    {
      provide: NG_VALIDATORS,
      useExisting:forwardRef(() => Telefonos),
      multi:true
    }
  ]
})
export class Telefonos implements OnInit,ControlValueAccessor,Validator {
  validate(control: AbstractControl): ValidationErrors | null {
      return this.form.valid ? null: {invalidTelefonos: true}
    }
   private sub?: Subscription
     onTouchedCb?: ()=> void
     writeValue(obj: any): void {
       obj && this.form.setValue(obj,{emitEvent: false})
     }
     registerOnChange(fn: any): void {
      this.sub = this.form.valueChanges.subscribe(fn)
     }
     registerOnTouched(fn: any): void {
       this.onTouchedCb = fn
     }
     setDisabledState?(isDisabled: boolean): void {
       isDisabled ? this.form.disable() : this.form.enable()
     }
     ngOnDestroy():void{
       this.sub?.unsubscribe()
     }
     ngOnInit(): void {

     }



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
