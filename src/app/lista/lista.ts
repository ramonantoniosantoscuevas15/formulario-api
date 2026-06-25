import { Component, Input } from '@angular/core';
import { RouterLink } from "@angular/router";
import { ListadoGenerico } from "../compartidos/componentes/listado-generico/listado-generico";

@Component({
  selector: 'app-lista',
  imports: [RouterLink, ListadoGenerico],
  templateUrl: './lista.html',
})
export class Lista {
  @Input({required:true}) pacientes!:any[]
}
