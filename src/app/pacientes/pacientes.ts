import { Component, EventEmitter, inject, Input, input, OnInit, Output } from '@angular/core';
import { SelectorDTO } from '../compartidos/componentes/selector/selectordto';
import { Selector } from "../compartidos/componentes/selector/selector";
import { MatFormField, MatInputModule, MatLabel } from "@angular/material/input";
import { MatDatepickerModule } from '@angular/material/datepicker';
import { FormBuilder, FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import{NgxPrintModule} from 'ngx-print';
import moment from 'moment';
import { FormUtilidades } from '../compartidos/componentes/form-utilidades';
import { PacienteDTO, CrearPacienteDTO } from './pacientedto';

@Component({
  selector: 'app-pacientes',
  imports: [MatFormFieldModule, MatInputModule, ReactiveFormsModule, MatDatepickerModule,MatButtonModule,FormsModule,NgxPrintModule],
  templateUrl: './pacientes.html',
})
export class Pacientes implements OnInit {
  ngOnInit(): void {
    if(this.modelo !== undefined){
      this.form.patchValue(this.modelo)
    }
  }
  private fb = inject(FormBuilder)
  formutilidades = FormUtilidades

  generos = [
    { genero: 'Masculino' },
    { genero: 'Femenino' },
    { genero: 'Otro' }
  ]
  sangres = [
    { sangre: 'A+' },
    { sangre: 'A-' },
    { sangre: 'B+' },
    { sangre: 'B-' },
    { sangre: 'AB+' },
    { sangre: 'AB-' },
    { sangre: 'O+' },
    { sangre: 'O-' },
  ]
  estados = [
    { estado: 'Activo' },
    { estado: 'Inactivo' }
  ]
  @Input() modelo?: PacienteDTO
  @Output() postpaciente = new EventEmitter<CrearPacienteDTO>()

  form = this.fb.group({
    nombre: ['', { validators: [Validators.required, Validators.minLength(3)] }],
    fechanacimiento: new FormControl<Date | null>(null),
    cedula: [0, [Validators.required, Validators.min(2)]],
    correo: ['', [Validators.required, Validators.pattern(this.formutilidades.emailPattern)]],
    genero: new FormControl(this.generos),
    telefono: [0, [Validators.required, Validators.min(2)]],
    direccion: ['', { validators: [Validators.required, Validators.minLength(3)] }],
    sangre: new FormControl(this.sangres),
    estado: new FormControl(this.estados),
    hospital: ['', { validators: [Validators.required, Validators.minLength(3)] }],
    nombredoctor: ['', { validators: [Validators.required, Validators.minLength(3)] }],
    motivo: ['', { validators: [Validators.required, Validators.minLength(3)] }],
    alergias: [''],
    notasmedicas: [''],
    nombrecontacto: ['', { validators: [Validators.required, Validators.minLength(3)] }],
    telefonocontacto: [0, [Validators.required, Validators.min(2)]],

  })
  guardarpaciente() {
    const paciente = this.form.value as CrearPacienteDTO
    paciente.fechaNacimiento = moment(paciente.fechaNacimiento).toDate()


    this.postpaciente.emit(paciente)
  }
}
