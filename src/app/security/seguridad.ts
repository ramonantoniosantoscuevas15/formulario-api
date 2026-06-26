import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { CredencialesUsuariodto, RespuestaAutenticaciondto } from './seguridaddto';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class Seguridad {
  private http = inject(HttpClient)
  private urlbase = environment.apiUrl + '/usuarios'
  private readonly llaveToken = 'token'
  private readonly llaveExpiracion = 'token-expiracion'

  registrar(credenciales: CredencialesUsuariodto):Observable<RespuestaAutenticaciondto>{
    return this.http.post<RespuestaAutenticaciondto>(`${this.urlbase}/registrar`,credenciales)
    .pipe(
      tap(respuestaAutenticacion => this.guardartoken(respuestaAutenticacion))
    )
  }

  login(credenciales: CredencialesUsuariodto):Observable<RespuestaAutenticaciondto>{
    return this.http.post<RespuestaAutenticaciondto>(`${this.urlbase}/login`,credenciales)
    .pipe(
      tap(respuestaAutenticacion => this.guardartoken(respuestaAutenticacion))
    )
  }

  guardartoken(respuestaAutenticacion:RespuestaAutenticaciondto){
    localStorage.setItem(this.llaveToken,respuestaAutenticacion.token)
    localStorage.setItem(this.llaveExpiracion,respuestaAutenticacion.expiracion.toString())

  }

  autorizado():boolean{
    const token = localStorage.getItem(this.llaveToken)
    if(!token){
      return false
    }

    const expiracion = localStorage.getItem(this.llaveExpiracion)!
    const expiracionFecha = new Date(expiracion)

    if(expiracionFecha <= new Date()){
      this.logout()
      return false

    }
    return true

  }
  logout(){
    localStorage.removeItem(this.llaveToken)
    localStorage.removeItem(this.llaveExpiracion)
  }
  obtenerRol():string{
    return'Admin'
  }

  noautorizado():boolean{
    return false
  }

  obtenercampo(campo:string):string{
    const token = localStorage.getItem(this.llaveToken)
    if(!token){
      return ''
    }
    var datatoken = JSON.parse(atob(token.split('.')[1]))
    return datatoken[campo]
  }

}
