import { inject, Injectable } from '@angular/core';
import { CategoriaDTO, CrearCategoriaDTO } from './crear-categorias/categoria';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class Categorias {
  /**
   *
   */
  private http = inject(HttpClient)
  private urlBase = environment.apiUrl
  constructor() {}

  public obtenerTodos(): Observable<CategoriaDTO[]>{
    return this.http.get<CategoriaDTO[]>(this.urlBase + '/Obtener Catalogo')
  }

  public crearCategoria(categoria: CrearCategoriaDTO){
    return this.http.post(this.urlBase + '/Agregar Categoria',categoria)
  }


}
