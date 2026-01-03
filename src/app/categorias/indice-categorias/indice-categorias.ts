import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Categorias } from '../categorias';
import { environment } from '../../../environments/environment';
import { CategoriaDTO } from '../crear-categorias/categoria';
import { ListadoGenerico } from "../../compartidos/componentes/listado-generico/listado-generico";
import { MatTableModule } from '@angular/material/table';
import { HttpResponse } from '@angular/common/http';
import { PaginacionDTO } from '../../compartidos/modelos/Paginaciondto';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-indice-categorias',
  imports: [RouterLink, MatButtonModule, ListadoGenerico,MatTableModule,MatPaginatorModule],
  templateUrl: './indice-categorias.html',
  styleUrl: './indice-categorias.css',
})
export class IndiceCategorias {
  categoriasService = inject(Categorias)
  categoriasAgrupadas!: CategoriaDTO[]
  columnasAMostrar = ['id','tipo','acciones']
  paginacion:PaginacionDTO ={pagina:1,recordsPorPagina:5}
  cantidadTotalRegistros!:number


  constructor(){
    this.Cargarregistros()

  }
  Cargarregistros(){
    this.categoriasService.obtenerTodos(this.paginacion).subscribe((respuesta:HttpResponse<CategoriaDTO[]>)=>
    {
      this.categoriasAgrupadas = respuesta.body as CategoriaDTO[]
      const cabecera = respuesta.headers.get('cantidad-total-registros') as string
      this.cantidadTotalRegistros = parseInt(cabecera,5)

    }
    )
  }

  actualizarPaginacion(datos:PageEvent){
    this.paginacion = {pagina: datos.pageIndex+1,recordsPorPagina: datos.pageSize}
    this.Cargarregistros()
  }

}
