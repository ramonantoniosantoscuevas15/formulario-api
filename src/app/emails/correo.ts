import { AutocompleCorreos } from './autocomple-correos/autocomple-correos';
export interface CorreoDTO{
  id:number,
  correo:string,
  idPersona:number

}

export interface CrearCorreoDTO{
  correo:string
}

export interface AutocompleCorreosDTO{

  nombre:string,
  correos:string
}
