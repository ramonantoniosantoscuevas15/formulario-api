import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';
import { CrearCategoriaDTO } from './categoria';
import { primeraLetraMayuscula } from '../../compartidos/funciones/validaciones';

@Component({
  selector: 'app-crear-categorias',
  imports: [MatButtonModule,ReactiveFormsModule,MatInputModule,MatButtonModule],
  templateUrl: './crear-categorias.html',
  styleUrl: './crear-categorias.css',
})
export class CrearCategorias implements OnInit {
  ngOnInit(): void {
    if(this.modelo !== undefined){
      this.form.patchValue(this.modelo)
    }
  }
  @Input()
  modelo?: CrearCategoriaDTO

  @Output()
  postFormulario = new EventEmitter<CrearCategoriaDTO>()

  private fb = inject(FormBuilder)

  form= this.fb.group({
    tipo:['',{validators:[Validators.required,primeraLetraMayuscula()]}]
  })

  obtenerErrorTipo(): string{
    let tipo = this.form.controls.tipo

     if(tipo.hasError('required')){
      return "El Campo Nombre es Requerido"
    }
    if(tipo.hasError('primeraLetraMayuscula')){
      return tipo.getError('primeraLetraMayuscula').mensaje
    }
    return ""
  }

  guardarCambios(){
    if(!this.form.valid){
      return
    }
    const categoria = this.form.value as CrearCategoriaDTO
    this.postFormulario.emit(categoria)
  }

}
