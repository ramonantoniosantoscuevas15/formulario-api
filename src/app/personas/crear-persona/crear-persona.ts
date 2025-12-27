import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router, RouterLink } from '@angular/router';
import { primeraLetraMayuscula } from '../../compartidos/funciones/validaciones';
import { CrearPersonaDTO, PersonaDTO } from './personas';
import { SelectorMultipleDTO } from '../../compartidos/componentes/selector-multiple/SelectorMultipleModelo';
import { SelectorMultiple } from "../../compartidos/componentes/selector-multiple/selector-multiple";
import { Emails } from "../../emails/crear-emails/emails";
import { AutocompleCorreosDTO, CorreoDTO, CrearCorreoDTO } from '../../emails/correo';
import { FormularioEmail } from "../../emails/formulario-email/formulario-email";
import { CrearCategoriaDTO } from '../../categorias/crear-categorias/categoria';
import { AutocompleCorreos } from "../../emails/autocomple-correos/autocomple-correos";
import { Telefonos } from "../../telefonos/telefonos";
import { CrearTelefonoDTO } from '../../telefonos/telefono';
import { Dirreciones } from "../../dirreciones/dirreciones";
import { FormUtilidades } from '../../compartidos/componentes/form-utilidades';
import { JsonPipe } from '@angular/common';
import { pipe } from 'rxjs';


@Component({
  selector: 'app-crear-persona',
  imports: [MatButtonModule, MatFormFieldModule, ReactiveFormsModule, MatInputModule, SelectorMultiple, FormsModule, Emails,JsonPipe],
  templateUrl: './crear-persona.html',
  styleUrl: './crear-persona.css',
})
export class CrearPersona implements OnInit {
  ngOnInit(): void {
    if (this.modelo !== undefined) {
      this.form.patchValue(this.modelo)
    }
  }
  @Input({ required: true })
  categoriasNoSeleccionadas!: SelectorMultipleDTO[]

  @Input({ required: true })
  categoriasSeleccionadas!: SelectorMultipleDTO[]

  //@Input()
  //emial!:CorreoDTO[]
  @Input()
  correosAgregados!:CrearCorreoDTO[]
  @Input({required:true})
  telefonosAgregados!: CrearTelefonoDTO[]
  @Input()
  postcorreos!: CrearCorreoDTO[]

  //@Input({required:true})correosSelecionandos!: AutocompleCorreosDTO[]

  private router = inject(Router)
  private fb = inject(FormBuilder)
  formUtilidades = FormUtilidades
  @Input()
  modelo?: PersonaDTO
  @Output()
  postFormulario = new EventEmitter<CrearPersonaDTO>
  form = this.fb.group({
    nombre: ['', { validators: [Validators.required,Validators.minLength(3) ] }],
    apellido: ['', { validators: [Validators.required, Validators.minLength(3)] }],
    cedula: ['', { validators: [Validators.required] }],
    emails:{
      correo:''
    }

  })


  guardarCambios() {
    if (!this.form.valid) {
      return
    }
    const persona = this.form.value as CrearPersonaDTO

    const categoriasIds = this.categoriasSeleccionadas.map(val => val.llave)


    persona.categoriasIds =categoriasIds
    //persona.correos = this.correosSelecionandos
    //persona.correos = this.correosAgregados
    //persona.correos = this.correos
    //persona.telefonos = this.telefonosAgregados
    

    this.postFormulario.emit(persona)

  }

}
