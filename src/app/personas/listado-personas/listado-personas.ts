import { Component, Input, } from '@angular/core';
import { ListadoGenerico } from "../../compartidos/componentes/listado-generico/listado-generico";
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Menu } from "../../compartidos/componentes/menu/menu";

@Component({
  selector: 'app-listado-personas',
  imports: [ListadoGenerico, MatButtonModule, MatIconModule],
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
