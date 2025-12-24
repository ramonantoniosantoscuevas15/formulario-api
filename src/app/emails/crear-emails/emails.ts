import { Component, EventEmitter, inject, input, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, Validators, ɵInternalFormsSharedModule, ReactiveFormsModule, FormControl, FormsModule, FormGroup } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatFormField, MatInput, MatInputModule } from '@angular/material/input';
import { CorreoDTO, CrearCorreoDTO } from '../correo';
import { CrearCategoriaDTO } from '../../categorias/crear-categorias/categoria';
import { MatButtonModule } from '@angular/material/button';
import { MatTable, MatTableModule } from '@angular/material/table';
import { MatAutocompleteModule, MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { FormUtilidades } from '../../compartidos/componentes/form-utilidades';

@Component({
  selector: 'app-emails',
  //imports: [MatFormFieldModule, ɵInternalFormsSharedModule, ReactiveFormsModule,MatInputModule,MatButtonModule,ReactiveFormsModule, MatFormFieldModule,  MatInputModule, MatAutocompleteModule, MatTableModule,],
  imports: [ReactiveFormsModule, MatFormFieldModule, FormsModule, MatInputModule, MatAutocompleteModule, MatTableModule,MatButtonModule],
  templateUrl: './emails.html',
  styleUrl: './emails.css',
})
export class Emails {

  @Input()
  postCorreo!: CrearCorreoDTO[]

  private fb = inject(FormBuilder)
  formUtilidades = FormUtilidades
  form = this.fb.group({
    correo: ['',[Validators.required,Validators.pattern(this.formUtilidades.emailPattern)]]
  })

  agregarCorreo(){
     if (!this.form.valid) {
      this.form.markAllAsTouched()
      return
    }
    this.postCorreo = this.form.value as CrearCorreoDTO[]



  }

  // control = new FormControl

  // emails: CrearCorreoDTO[]=[
  //   {
  //     correos:''
  //   }
  // ]
  // @ViewChild(MatTable) table!: MatTable<CrearCorreoDTO>
  // columnasAmostrar = ['correos']
  // @Input({required:true})
  // correosAgregados: CrearCorreoDTO[]=[]

  // correoAgregado(event:MatAutocompleteSelectedEvent){
  //   this.correosAgregados.push(event.option.value),
  //   this.control.patchValue('')
  //   if(this.table != undefined){
  //     this.table.renderRows()
  //   }

  // }


  // private fb = inject(FormBuilder)
  // @Input({required: true})
  // email?:CorreoDTO[]

  // //@Output()
  // //postFormulario = new EventEmitter<CrearCorreoDTO>
  // form = this.fb.group({
  //   correos:['',{validators:[Validators.required,Validators.email]}]
  // })

  // obtenerErrorCorreo():string{
  //   let correo = this.form.controls.correos

  //   if(correo.hasError('required')){
  //     return"El Campo Correo Es Requerido"

  //   }
  //   if(correo.touched && correo.invalid){
  //     return "Es Necesario un @"
  //   }
  //   return""
  // }





}
