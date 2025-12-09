import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function primeraLetraMayuscula(): ValidatorFn{
  return (control: AbstractControl): ValidationErrors | null =>{
    const valor = <string>control.value

    if(!valor) return null;
    if(valor.length===0) return null;
    const primeraletra = valor[0]

    if(primeraletra !== primeraletra.toUpperCase()){
      return{
        primeraLetraMayuscula:{
          mensaje: 'La primera letra debe ser mayúscula'
        }
      }
    }
    return null
  }
}
