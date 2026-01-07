import { HttpClient, HttpResponse } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { PaginacionDTO } from '../compartidos/modelos/Paginaciondto';
import { Observable } from 'rxjs';
import { CrearPersonaDTO, PersonaDTO } from './crear-persona/personas';
import { contruirQueryParams } from '../compartidos/funciones/contruirQueryParams';

@Injectable({
  providedIn: 'root',
})
export class Personasservices {
  private http = inject(HttpClient)
  private urlBase = environment.apiUrl
  constructor(){}

  public obtenerPersonas(paginacion:PaginacionDTO): Observable<HttpResponse<PersonaDTO[]>>{
    let queryparams = contruirQueryParams(paginacion)
    return this.http.get<PersonaDTO[]>(this.urlBase + '/Obtener Personas',{params:queryparams, observe:'response'})
  }

  public obtenerporid(id:number):Observable<PersonaDTO>{
    return this.http.get<PersonaDTO>(`${this.urlBase + '/Obtener persona por id'}/${id}`)
  }

  public crearPersona(persona:CrearPersonaDTO){
    return this.http.post(this.urlBase + '/Agregar Personas',persona)
  }

  public actualizarPersona(id:number,persona:CrearPersonaDTO){
    return this.http.put(`${this.urlBase + '/Actualizar Personas'}/${id}`,persona)
  }

  public borrarPersona(id:number){
    return this.http.delete(`${this.urlBase + '/Borrar Personas'}/${id}`)
  }

}
