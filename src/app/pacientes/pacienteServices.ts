import { paginaciondto } from './../../models/paginaciondto';
import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';
import { Observable } from 'rxjs';
import { CrearPacienteDTO, PacienteDTO } from './pacientedto';
import { construirQueryParams } from '../../models/queris/construirQueryParams';



@Injectable({
  providedIn: 'root',
})
export class PacienteServices {
  private http = inject(HttpClient)
  private urlbase = environment.apiUrl + '/paciente'

  public crear(paciente: CrearPacienteDTO): Observable<PacienteDTO> {
    const formData = this.construirFormdata(paciente)
    return this.http.post<PacienteDTO>(this.urlbase, formData)

  }

  construirFormdata(paciente: CrearPacienteDTO): FormData {
    const formData = new FormData()
    formData.append('nombre', paciente.nombre)
    formData.append('fechanacimiento', paciente.fechaNacimiento.toISOString().split('T')[0])
    formData.append('cedula', JSON.stringify(paciente.cedula))
    formData.append('correo', paciente.correo)
    formData.append('genero', JSON.stringify(paciente.genero))
    formData.append('telefono', JSON.stringify(paciente.telefono))
    formData.append('direccion', paciente.direccion)
    formData.append('sangre', JSON.stringify(paciente.sangre))
    formData.append('estado', JSON.stringify(paciente.estado))
    formData.append('hospital', paciente.hospital)
    formData.append('nombredoctor', paciente.nombredoctor)
    formData.append('motivo', paciente.motivo)
    formData.append('alergias', paciente.alergias)
    formData.append('notasmedicas', paciente.notasmedicas)
    formData.append('nombrecontacto', paciente.nombrecontacto)
    formData.append('telefonocontacto', JSON.stringify(paciente.telefonocontacto))
    return formData
  }
  public obtenertodos(paginacion: paginaciondto): Observable<HttpResponse<PacienteDTO[]>> {
    let queryparams = construirQueryParams(paginacion)
    return this.http.get<PacienteDTO[]>(this.urlbase, { params: queryparams, observe: 'response' })
  }
  public obtenerporid(id: number): Observable<PacienteDTO> {
    return this.http.get<PacienteDTO>(`${this.urlbase}/${id}`)
  }
  public actualizar(id: number, paciente: CrearPacienteDTO) {
    return this.http.put(`${this.urlbase}/${id}`, paciente)
  }
  public borrar(id: number) {
    return this.http.delete(`${this.urlbase}/${id}`)
  }
  public buscar(valores:any):Observable<HttpResponse<PacienteDTO[]>>{
    const params = new HttpParams({fromObject:valores})
    return this.http.get<PacienteDTO[]>(`${this.urlbase}/buscar`,{params,observe:'response'})
  }




}
