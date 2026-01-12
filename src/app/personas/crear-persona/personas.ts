import { CrearDirrecionDTO, DirrecionDTO } from "../../dirreciones/direccion"
import { AutocompleCorreosDTO, CorreoDTO, CrearCorreoDTO } from "../../emails/correo"
import { CrearTelefonoDTO, TelefonoDTO } from "../../telefonos/telefono"

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
  emailid:number,
  telefonoid:number,
  dirrecionid:number

}
