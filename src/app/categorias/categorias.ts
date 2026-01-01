import { Injectable } from '@angular/core';
import { CategoriaDTO } from './crear-categorias/categoria';

@Injectable({
  providedIn: 'root',
})
export class Categorias {
  /**
   *
   */
  constructor() {}

  public obtenerTodos(): CategoriaDTO[]{
    return [{id:1,tipo:'Empleado Mision'}]
  }
 

}
