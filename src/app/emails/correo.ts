import { AutocompleCorreos } from './autocomple-correos/autocomple-correos';
export interface CorreoDTO{
  id:number,
  correos:string,

}

export interface CrearCorreoDTO{
  correos?:string
}

export interface AutocompleCorreosDTO{
  
  nombre:string,
  correos:string
}
