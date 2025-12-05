import { Component, Input, } from '@angular/core';
import { ListadoGenerico } from "../../compartidos/componentes/listado-generico/listado-generico";

@Component({
  selector: 'app-listado-personas',
  imports: [ListadoGenerico],
  templateUrl: './listado-personas.html',
  styleUrl: './listado-personas.css',
})
export class ListadoPersonas{

  @Input({required:true})
  personas!:any[]
  AgregarPersona(){
    this.personas.push({
      nombre: "julia",
      apellido: "martes",
      cedula:"789563"
    })
  }

  Remover(personas: any){
    const indice = this.personas.findIndex((personaActual: any) => personaActual.nombre === personas.titulo)
    this.personas.splice(indice, 1)

  }

}
