import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { CrearTelefonoDTO } from './telefono';

@Injectable({
  providedIn: 'root',
})
export class Telefonosservices {
  private http = inject(HttpClient)
  private urlBase = environment.apiUrl
  constructor(){}

  public crearTelefono(idpersona:number,telefono:CrearTelefonoDTO){
    return this.http.post(`${this.urlBase + '/Agregar Telefono/persona'}/${idpersona}/telefonos`, telefono)
  }

  public actualizarTelefono(id:number,telefono:CrearTelefonoDTO){
    return this.http.put(`${this.urlBase + '/Actualizar Telefono'}/${id}`, telefono)
  }

  public borrarTelefono(id:number){
    return this.http.delete(`${this.urlBase + '/Borrar Telefono'}/${id}`)
  }

}
