import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { CrearCorreoDTO } from './correo';

@Injectable({
  providedIn: 'root',
})
export class Correosservices {
  private http = inject(HttpClient)
  private urlBase = environment.apiUrl
  constructor(){}

  public crearCorreo(correo:CrearCorreoDTO,idpersona:number){
    return this.http.post(`${this.urlBase + '/Agregar Correo/persona'}/${idpersona}`,correo)
  }

}
