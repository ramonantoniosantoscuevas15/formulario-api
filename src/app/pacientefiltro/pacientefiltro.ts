import { Component, inject } from '@angular/core';
import { PacienteServices } from '../pacientes/pacienteServices';
import { PaginacionDTO } from '../compartidos/modelos/Paginaciondto';
import { pacientefiltrodto } from './pacientefiltrodto';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { PacienteDTO } from '../pacientes/pacientedto';
import { Location } from '@angular/common';
import { PageEvent, MatPaginator } from '@angular/material/paginator';
import { ListadoPacientes } from "../listado-pacientes/listado-pacientes";
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-pacientefiltro',
  imports: [ReactiveFormsModule, MatPaginator, ListadoPacientes,MatButtonModule, MatIconModule,RouterLink],
  templateUrl: './pacientefiltro.html',
})
export class Pacientefiltro {
  constructor(){
    this.leerValoresUrl()
    this.buscarpacientes(this.form.value as pacientefiltrodto)
    this.form.valueChanges.subscribe(valores=>{
      this.buscarpacientes(valores as pacientefiltrodto )
      this.escribirParametrosBusquedaEnUrl(valores as pacientefiltrodto)
    })
  }
  pacienteServices = inject(PacienteServices)
  paginacion: PaginacionDTO = { pagina: 1, recordsPorPagina: 10 }
  cantidadTotalRegistros!: number

  escribirParametrosBusquedaEnUrl(valores: pacientefiltrodto) {
    let queryString = []
    if (valores.nombre) {
      queryString.push(`nombre=${encodeURI(valores.nombre)}`)
    }
    this.location.replaceState('pacientefiltro', queryString.join('&'))

  }
  limpiar() {
    this.form.patchValue({ nombre: '' })
  }

  buscarpacientes(valores:pacientefiltrodto){
    valores.pagina=this.paginacion.pagina
    valores.recordsPorPagina=this.paginacion.recordsPorPagina
    this.pacienteServices.buscar(valores).subscribe(respuesta =>{
      this.paciente=respuesta.body as PacienteDTO[]
      const cabecera = respuesta.headers.get('cantidadTotalRegistros') as string
      this.cantidadTotalRegistros = parseInt(cabecera,10)

    })
  }
  leerValoresUrl(){
    this.activatedRoute.queryParams.subscribe((params: any) => {
      var objeto: any = {}
      if (params.nombre) {
        objeto.nombre = params.nombre
      }

      this.form.patchValue(objeto)
    })
  }
  actualizarPaginacion(datos:PageEvent){
    this.paginacion = {pagina: datos.pageIndex+1,recordsPorPagina: datos.pageSize}
    this.buscarpacientes(this.form.value as pacientefiltrodto)

  }
  private fb = inject(FormBuilder)
  private location = inject(Location)
  private activatedRoute = inject(ActivatedRoute)

  form = this.fb.group({
    nombre: '',
  })
  paciente!: PacienteDTO[]
}
