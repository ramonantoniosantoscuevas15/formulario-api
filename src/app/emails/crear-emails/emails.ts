import { Component, EventEmitter, forwardRef, inject, input, Input, OnInit, output, Output, ViewChild } from '@angular/core';
import { FormBuilder, Validators, ɵInternalFormsSharedModule, ReactiveFormsModule, FormControl, FormsModule, FormGroup, ControlValueAccessor, NG_VALUE_ACCESSOR, NG_VALIDATORS, Validator, AbstractControl, ValidationErrors } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatFormField, MatInput, MatInputModule } from '@angular/material/input';
import { CorreoDTO, CrearCorreoDTO } from '../correo';
import { CrearCategoriaDTO } from '../../categorias/crear-categorias/categoria';
import { MatButtonModule } from '@angular/material/button';
import { MatTable, MatTableModule } from '@angular/material/table';
import { MatAutocompleteModule, MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { FormUtilidades } from '../../compartidos/componentes/form-utilidades';
import { Subscriber, Subscription } from 'rxjs';

@Component({
  selector: 'app-emails',
  //imports: [MatFormFieldModule, ɵInternalFormsSharedModule, ReactiveFormsModule,MatInputModule,MatButtonModule,ReactiveFormsModule, MatFormFieldModule,  MatInputModule, MatAutocompleteModule, MatTableModule,],
  imports: [ReactiveFormsModule, MatFormFieldModule, FormsModule, MatInputModule, MatAutocompleteModule, MatTableModule,MatButtonModule],
  templateUrl: './emails.html',
  styleUrl: './emails.css',
  providers:[
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting:forwardRef(() => Emails),
      multi:true


    },
    {
      provide: NG_VALIDATORS,
      useExisting:forwardRef(() => Emails),
      multi:true


    },

  ]
})
export class Emails implements OnInit, ControlValueAccessor,Validator {
  validate(control: AbstractControl): ValidationErrors | null {
    return this.form.valid ? null: {invalidEmails: true}
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
    if(this.modeloCorreo !== undefined){
      this.form.patchValue(this.modeloCorreo)
    }


  }
  @Input() modeloCorreo? : CorreoDTO

  @Output() postCorreo = new EventEmitter<CrearCorreoDTO>()

  private fb = inject(FormBuilder)
  formUtilidades = FormUtilidades
  form = this.fb.group({
    correo: ['',[Validators.required,Validators.pattern(this.formUtilidades.emailPattern)]]
  })

  agregarCorreo(){
     if (!this.form.valid) {

      return
    }
    const correo = this.form.value as CrearCorreoDTO
    this.postCorreo.emit(correo)
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
