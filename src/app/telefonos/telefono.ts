export interface TelefonoDTO{
  id : number,
  tipo: string,
  codigoPais: string,
  numero: number,
  idPersona:number
}

export interface CrearTelefonoDTO{
  tipo: string,
  codigoPais: string,
  numero: number
}
