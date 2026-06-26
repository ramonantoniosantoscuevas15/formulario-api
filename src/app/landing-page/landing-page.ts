import { Component, inject, OnInit } from '@angular/core';
import { ListadoPersonas } from "../personas/listado-personas/listado-personas";
import { PacienteServices } from '../pacientes/pacienteServices';
import { PacienteDTO } from '../pacientes/pacientedto';
import { paginaciondto } from '../../models/paginaciondto';
import { HttpResponse } from '@angular/common/http';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { ListadoGenerico } from "../compartidos/componentes/listado-generico/listado-generico";
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { RouterLink } from '@angular/router';

import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { Lista } from "../lista/lista";
import { Autorizado } from "../autorizado/autorizado";

@Component({
  selector: 'app-landing-page',
  imports: [MatButtonModule, MatTableModule, MatPaginatorModule, SweetAlert2Module, Lista, Autorizado],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.css',
})
export class LandingPage  {
  private pacienteServices = inject(PacienteServices)
  paciente!:PacienteDTO[]
  columnasAMostrar= ['id','nombre','fechanacimiento','sangre','estado','acciones']
  paginacion:paginaciondto={pagina:1,recordsPorPagina:5}
  cantidadTotalRegistros!:number
  constructor(){
    this.Cargarregistros()
  }

  Cargarregistros(){
    this.pacienteServices.obtenertodos(this.paginacion).subscribe((respuesta:HttpResponse<PacienteDTO[]>)=>{
      this.paciente = respuesta.body as PacienteDTO[]
      const cabecera = respuesta.headers.get("cantidadTotalRegistros") as string
      this.cantidadTotalRegistros = parseInt(cabecera,10)

    })
  }
  actualizarPaginacion(datos:PageEvent){
    this.paginacion = {pagina: datos.pageIndex+1,recordsPorPagina: datos.pageSize}
    this.Cargarregistros()
  }
  borrar(id:number){
    this.pacienteServices.borrar(id).subscribe(()=>{
      this.paginacion = {pagina:1,recordsPorPagina:5}
      this.Cargarregistros()
    })
  }


}
