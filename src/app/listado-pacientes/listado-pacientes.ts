import { Component, Input } from '@angular/core';
import { ListadoGenerico } from "../compartidos/componentes/listado-generico/listado-generico";
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-listado-pacientes',
  imports: [ListadoGenerico,RouterLink,MatButtonModule, MatIconModule,],
  templateUrl: './listado-pacientes.html',
})
export class ListadoPacientes {
  @Input({required:true}) pacientes!:any[]
}
