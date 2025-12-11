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
  categoriasIds?: number[]
}
