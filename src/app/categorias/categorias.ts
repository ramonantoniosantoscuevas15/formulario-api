import { inject, Injectable } from '@angular/core';
import { CategoriaDTO, CrearCategoriaDTO } from './crear-categorias/categoria';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { PaginacionDTO } from '../compartidos/modelos/Paginaciondto';
import { contruirQueryParams } from '../compartidos/funciones/contruirQueryParams';

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

  public obtenerTodos(paginacion: PaginacionDTO): Observable<HttpResponse< CategoriaDTO[]>>{
    let queryparams = contruirQueryParams(paginacion)
    return this.http.get<CategoriaDTO[]>(this.urlBase + '/Obtener Catalogo',{params:queryparams, observe:'response'})
  }

  public obtenerPorid(id:number):Observable<CategoriaDTO>{
    return this.http.get<CategoriaDTO>(`${this.urlBase + '/Obtener Categoria por id'}/${id}`)

  }

  public actualizar(id:number,categoria: CrearCategoriaDTO){
    return this.http.put(`${this.urlBase + '/Actualizar Categoria'}/${id}`,categoria)

  }

  public crearCategoria(categoria: CrearCategoriaDTO){
    return this.http.post(this.urlBase + '/Agregar Categoria',categoria)
  }


}
