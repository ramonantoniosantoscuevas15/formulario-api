import { Component, inject } from '@angular/core';
import { CrearPersona } from "../crear-persona/crear-persona";
import { CrearPersonaDTO } from '../crear-persona/personas';
import { SelectorMultipleDTO } from '../../compartidos/componentes/selector-multiple/SelectorMultipleModelo';
import { AutocompleCorreosDTO, CorreoDTO, CrearCorreoDTO } from '../../emails/correo';
import { Emails } from '../../emails/crear-emails/emails';
import { CrearTelefonoDTO } from '../../telefonos/telefono';
import { FormBuilder, ɵInternalFormsSharedModule, ReactiveFormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { Dirreciones } from "../../dirreciones/dirreciones";
import { Telefonos } from "../../telefonos/telefonos";
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-formulario-personas',
  imports: [CrearPersona, ɵInternalFormsSharedModule, ReactiveFormsModule, MatButtonModule, Emails, Dirreciones, Telefonos,JsonPipe,],
  templateUrl: './formulario-personas.html',
  styleUrl: './formulario-personas.css',
})
export class FormularioPersonas {
   private fb = inject(FormBuilder)
   form= this.fb.group({
    emails: {
       correo: ''
     },
   dirreciones: {
      tipo: '',
      ubicacion: '',
      ciudad: '',
      provincia: '',
       codigopostal: '',
       pais: ''
    },
    telefonos: {
      tipo: '',
      codigopais: '',
     numero: 0

    },

   })
  categoriasSeleccionadas : SelectorMultipleDTO[] = []
  categoriasNoSeleccionadas : SelectorMultipleDTO[] = [
    {llave: 1, valor: 'Empleado Mision'},
    {llave: 2, valor: 'Visitante'},
    {llave: 3, valor: 'Empleado'},
  ]
  correosAgregados:CrearCorreoDTO[]=[]
  telefonosAgregados: CrearTelefonoDTO[] = []
  postCorreo: CrearCorreoDTO[]=[]

  emails:CrearCorreoDTO[]=[]

  //correoSelecionandos: AutocompleCorreosDTO[]=[]
  agregarCorreo(correo: CrearCorreoDTO) {
    let correos = this.form.controls.emails.value as CrearCorreoDTO
    correos = correo
    this.emails.push(correos)
    console.log(this.emails)

    //this.correoservices.crearCorreo(correo,correo.idpersona.emailid).subscribe()
  }

  guardarCambios(persona: CrearPersonaDTO){
    if (!this.form.valid) {
      return
    }

    console.log("Se creo la Persona", persona)

  }
  enviar(){
    this.guardarCambios
    this.agregarCorreo
  }



}
