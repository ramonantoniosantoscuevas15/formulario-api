import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Categorias } from '../categorias';
import { environment } from '../../../environments/environment';
import { CategoriaDTO } from '../crear-categorias/categoria';
import { ListadoGenerico } from "../../compartidos/componentes/listado-generico/listado-generico";
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-indice-categorias',
  imports: [RouterLink, MatButtonModule, ListadoGenerico,MatTableModule],
  templateUrl: './indice-categorias.html',
  styleUrl: './indice-categorias.css',
})
export class IndiceCategorias {
  categoriasService = inject(Categorias)
  categoriasAgrupadas!: CategoriaDTO[]
  columnasAMostrar = ['id','tipo','acciones']


  constructor(){
    this.categoriasService.obtenerTodos().subscribe(categorias=>
    {
      this.categoriasAgrupadas = categorias

    }
    )
  }

}
