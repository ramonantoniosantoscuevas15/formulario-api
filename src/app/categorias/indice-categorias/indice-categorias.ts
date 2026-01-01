import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Categorias } from '../categorias';

@Component({
  selector: 'app-indice-categorias',
  imports: [RouterLink,MatButtonModule],
  templateUrl: './indice-categorias.html',
  styleUrl: './indice-categorias.css',
})
export class IndiceCategorias {
  categoriasService = inject(Categorias)

  constructor(){
    const categorias =this.categoriasService.obtenerTodos()
    console.log(categorias)
  }

}
