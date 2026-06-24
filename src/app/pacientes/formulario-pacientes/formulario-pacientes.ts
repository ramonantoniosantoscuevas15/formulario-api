import { Component, inject } from '@angular/core';
import { Pacientes } from "../pacientes";
import { SelectorDTO } from '../../compartidos/componentes/selector/selectordto';
import { PacienteServices } from '../pacienteServices';
import { CrearPacienteDTO } from '../pacientedto';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario-pacientes',
  imports: [Pacientes],
  templateUrl: './formulario-pacientes.html',
})
export class FormularioPacientes {
  pacienteServices = inject(PacienteServices)
  router = inject(Router)

  guardarpaciente(paciente: CrearPacienteDTO) {
    this.pacienteServices.crear(paciente).subscribe({
      next: paciente => {
        Swal.fire({
          title: "Paciente Agregado Correctamente",
          icon: "success",
          draggable: true
        })
      }

    })
    this.router.navigate(['/'])

  }




}
