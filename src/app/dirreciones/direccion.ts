import { CrearPersonaDTO } from "../personas/crear-persona/personas"

export interface DirrecionDTO {
  id: number,
  tipo: string,
  ubicacion: string,
  ciudad: string,
  provincia: string,
  codigoPostal: string,
  pais: string,
  idPersona:number
}

export interface CrearDirrecionDTO {
  tipo: string,
  ubicacion: string,
  ciudad: string,
  provincia: string,
  codigopostal: string,
  pais: string,
  idpersona:CrearPersonaDTO

}
