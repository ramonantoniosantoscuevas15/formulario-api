import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
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
import { CrearDirrecionDTO } from '../../dirreciones/direccion';
import { Correosservices } from '../../emails/correosservices';
import { Dirrecionesservices } from '../../dirreciones/dirrecionesservices';
import { Telefonosservices } from '../../telefonos/telefonosservices';


@Component({
  selector: 'app-crear-persona',
  imports: [MatButtonModule, MatFormFieldModule, ReactiveFormsModule, MatInputModule, SelectorMultiple, FormsModule, RouterLink, JsonPipe,],
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



  //@Input({required:true})correosSelecionandos!: AutocompleCorreosDTO[]

  private router = inject(Router)
  private fb = inject(FormBuilder)
  private correoservices = inject(Correosservices)
  private dirrecionesservices = inject(Dirrecionesservices)
  private telefonosservices = inject(Telefonosservices)
  formUtilidades = FormUtilidades
  @Input()
  modelo?: PersonaDTO
  @Output()
  postFormulario = new EventEmitter<CrearPersonaDTO>
  form = this.fb.group({

    nombre: ['', { validators: [Validators.required, Validators.minLength(3)] }],
    apellido: ['', { validators: [Validators.required, Validators.minLength(3)] }],
    cedula: ['', { validators: [Validators.required] }],
    correo: this.fb.array([
      ['', [Validators.required, Validators.pattern(this.formUtilidades.emailPattern)]],

    ]),


    emails: {
      correo: ''
    },
    // dirreciones: {
    //   tipo: '',
    //   ubicacion: '',
    //   ciudad: '',
    //   provincia: '',
    //   codigopostal: '',
    //   pais: ''
    // },
    // telefonos: {
    //   tipo: '',
    //   codigopais: '',
    //   numero: 0

    // },


  })
  get correo() {
    return this.form.get('correo') as FormArray
  }
  newcorreo = new FormControl('',Validators.required)
  agregarotrocorreo(){
    if(this.newcorreo.invalid) return
    const newcorreo = this.newcorreo.value
    this.correo.push(this.fb.control(newcorreo,Validators.required))
  }



   agregarCorreo(correo: CrearCorreoDTO) {
   let correos = this.form.controls.emails.value as CrearCorreoDTO
    correos = correo
   this.correoservices.crearCorreo(correo,correo.idpersona.emailid).subscribe()
 }
  // guardarDirrecion(direcciones: CrearDirrecionDTO) {
  //   let dirrecion = this.form.controls.dirreciones.value as CrearDirrecionDTO
  //   dirrecion = direcciones
  //   this.dirrecionesservices.crearDirrecion(dirrecion.idpersona.dirrecionid,dirrecion).subscribe()
  // }

  // guardarTelefono(telefonos: CrearTelefonoDTO){
  //   let telefono = this.form.controls.telefonos.value as CrearTelefonoDTO
  //   telefono = telefonos
  //   this.telefonosservices.crearTelefono(telefono.idpersona.emailid,telefono).subscribe()
  // }



  guardarCambios() {
    if (!this.form.valid) {
      return
    }
    //pruebas de los demas formularios
    // this.agregarCorreo
    // this.guardarDirrecion
    // this.guardarTelefono
    // let correos = this.form.controls.emails.value as CrearCorreoDTO
    // let dirrecion = this.form.controls.dirreciones.value as CrearDirrecionDTO
    // let telefono = this.form.controls.telefonos.value as CrearTelefonoDTO

    const persona = this.form.value as CrearPersonaDTO

    const categoriasIds = this.categoriasSeleccionadas.map(val => val.llave)


    persona.categoriasIds = categoriasIds
    //pruebas de las relaciones
    // persona.emailid = this.modelo!.id
    // persona.telefonoid = this.modelo!.id
    // this.agregarCorreo(correos)
    // this.guardarDirrecion(dirrecion)
    // this.guardarTelefono(telefono)

    // persona.email = this.form.controls.emails.value as CrearCorreoDTO
    // persona.telefono = this.form.controls.telefonos.value as CrearTelefonoDTO
    // persona.dirrecion = this.form.controls.dirreciones.value as CrearDirrecionDTO
    //persona.correos = this.correosSelecionandos
    //persona.correos = this.correosAgregados
    //persona.correos = this.correos
    //persona.telefonos = this.telefonosAgregados


    this.postFormulario.emit(persona)
    //this.router.navigate(['/emails/formulario'])

  }

}
