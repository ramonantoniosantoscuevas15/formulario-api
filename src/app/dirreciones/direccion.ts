export interface DirrecionDTO {
  id: number,
  Tipo: string,
  Ubicacion: string,
  Ciudad: string,
  Provincia: string,
  CodigoPostal: string,
  Pais: string,
  idPersona:number
}

export interface CrearDirrecionDTO {
  Tipo: string,
  Ubicacion: string,
  Ciudad: string,
  Provincia: string,
  CodigoPostal: string,
  Pais: string

}
