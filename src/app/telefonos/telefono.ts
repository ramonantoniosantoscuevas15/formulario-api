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
  numero: number
}
