import { AutocompleCorreosDTO, CorreoDTO, CrearCorreoDTO } from "../../emails/correo"
import { CrearTelefonoDTO } from "../../telefonos/telefono"

export interface PersonaDTO{
  id: number,
  nombre : string,
  apellido: string,
  cedula: string
}

export interface CrearPersonaDTO{
  nombre: string,
  apellido: string,
  cedula: string,
  categoriasIds?: number[],
  //correos: AutocompleCorreosDTO[],
  correos: CrearCorreoDTO[],
  telefonos: CrearTelefonoDTO[]
}
