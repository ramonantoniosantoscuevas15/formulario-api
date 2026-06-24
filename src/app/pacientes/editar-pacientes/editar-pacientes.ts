import { Component, inject, Input, numberAttribute, OnInit } from '@angular/core';
import { Pacientes } from "../pacientes";
import { CrearPacienteDTO, PacienteDTO } from '../pacientedto';
import { PacienteServices } from '../pacienteServices';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Cargando } from "../../compartidos/componentes/cargando/cargando";

@Component({
  selector: 'app-editar-pacientes',
  imports: [Pacientes, Cargando],
  templateUrl: './editar-pacientes.html',
})
export class EditarPacientes implements OnInit {
  ngOnInit(): void {
    this.pacienteServices.obtenerporid(this.id).subscribe(pacientes =>{
      this.paciente = pacientes

    })
  }

  @Input({transform:numberAttribute}) id!:number
  paciente?:PacienteDTO
  pacienteServices = inject(PacienteServices)
  private router = inject(Router)

   guardarpaciente(paciente: CrearPacienteDTO) {
      this.pacienteServices.actualizar(this.id, paciente).subscribe({
        next: () => {
          Swal.fire({
            title: "Paciente Actualizado Correctamente",
            icon: "success",
            draggable: true
          })
        }

      })
      this.router.navigate(['/'])

    }
}
