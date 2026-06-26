import { Component, inject, Input } from '@angular/core';
import { Seguridad } from '../security/seguridad';

@Component({
  selector: 'app-autorizado',
  imports: [],
  templateUrl: './autorizado.html',
})
export class Autorizado {
  seguridadServices = inject(Seguridad)
  @Input() rol?: string

  estaautorizado(): boolean {
    if (this.rol) {
      return this.seguridadServices.obtenerRol() === this.rol
    } else {
      return this.seguridadServices.autorizado()
    }

  }
}
