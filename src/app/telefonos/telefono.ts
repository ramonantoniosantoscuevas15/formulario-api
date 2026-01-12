import { CrearCategoriaDTO } from '../categorias/crear-categorias/categoria';
import { CrearPersonaDTO } from '../personas/crear-persona/personas';
export interface TelefonoDTO{
  id : number,
  tipo: string,
  codigopais: string,
  numero: number,
  idPersona:number
}

export interface CrearTelefonoDTO{
  tipo: string,
  codigopais: string,
  numero: number,
  idpersona:CrearPersonaDTO
}
