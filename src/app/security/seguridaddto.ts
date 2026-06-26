export interface CredencialesUsuariodto{
  email:string,
  password:string
}

export interface RespuestaAutenticaciondto{
  token: string,
  expiracion: Date
}
