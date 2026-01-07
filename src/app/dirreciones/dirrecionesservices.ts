import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { CrearDirrecionDTO } from './direccion';

@Injectable({
  providedIn: 'root',
})
export class Dirrecionesservices {
  private http = inject(HttpClient)
  private urlBase = environment.apiUrl
  constructor(){}

  public crearDirrecion(idpersona:number,dirrecion:CrearDirrecionDTO){
    return this.http.post(`${this.urlBase + '/Agregar Dirrecion/persona'}/${idpersona}/dirrecion`, dirrecion)
  }

  public actualizarDirrecion(id:number,dirrecion:CrearDirrecionDTO){
    return this.http.put(`${this.urlBase + '/Actualizar Dirrecion'}/${id}`, dirrecion)
  }

  public borrarDirrecion(id:number){
    return this.http.delete(`${this.urlBase + '/Borrar Dirrecion'}/${id}`)
  }

}
