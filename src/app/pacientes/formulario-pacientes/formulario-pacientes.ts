import { Component, inject } from '@angular/core';
import { Pacientes } from "../pacientes";
import { SelectorDTO } from '../../compartidos/componentes/selector/selectordto';
import { PacienteServices } from '../pacienteServices';

@Component({
  selector: 'app-formulario-pacientes',
  imports: [Pacientes],
  templateUrl: './formulario-pacientes.html',
})
export class FormularioPacientes {

  generosSeleccionados:SelectorDTO[]=[]
  generosNoSeleccionados:SelectorDTO[]=[]
  estadoSeleccionados:SelectorDTO[]=[]
  estadoNoSeleccionados:SelectorDTO[]=[]
  sangreSeleccionada:SelectorDTO[]=[]
  sangreNoSeleccionada:SelectorDTO[]=[]
  cursonoseleccionado:SelectorDTO[]=[]
  cursoseleccionado:SelectorDTO[]=[]


  pacienteservices = inject(PacienteServices)

  constructor(){
   this.pacienteservices.crearget().subscribe(modelo => {
      this.cursonoseleccionado = modelo.cursos.map(curso => {
        return <SelectorDTO><unknown>{ id: curso.id, nombreCurso: curso.nombreCurso }
      })
    })
  }

}
