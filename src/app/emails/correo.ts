import { CrearPersonaDTO } from '../personas/crear-persona/personas';
import { AutocompleCorreos } from './autocomple-correos/autocomple-correos';
export interface CorreoDTO{
  id:number,
  correo:string,
  idPersona:number

}

export interface CrearCorreoDTO{
  correo:string,
  idpersona:CrearPersonaDTO
}

export interface AutocompleCorreosDTO{

  nombre:string,
  correos:string
}
