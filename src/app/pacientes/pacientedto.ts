import { cursosDTO } from "../cursos/cursosDTO";
import { EstadoDTO } from "../estado/estadodto";
import { GeneroDTO } from "../generos/generodto";
import { SangreDTO } from "../sangre/sangredto";

export interface CrearPacienteDTO {
  nombre: string,
  fechaNacimiento: Date,
  cedula: number,
  correo: string,
  genero: [],
  telefono: number,
  direccion: string,
  sangre: [],
  estado: [],
  hospital: string,
  nombredoctor: string,
  motivo: string,
  alergias: string,
  notasmedicas: string,
  nombrecontacto: string,
  telefonocontacto: number,
}
export interface PacienteDTO {
  id: number,
  nombre: string,
  fechaNacimiento: Date,
  cedula: number,
  correo: string,
  genero: [],
  telefono: number,
  direccion: string,
  sangre: [],
  estado: [],
  hospital: string,
  nombredoctor: string,
  motivo: string,
  alergias: string,
  notasmedicas: string,
  nombrecontacto: string,
  telefonocontacto: number,
}
