import { Component } from '@angular/core';
import { CrearCategoriaDTO } from '../crear-categorias/categoria';
import { CrearCategorias } from "../crear-categorias/crear-categorias";

@Component({
  selector: 'app-formulario-categoria',
  imports: [CrearCategorias],
  templateUrl: './formulario-categoria.html',
  styleUrl: './formulario-categoria.css',
})
export class FormularioCategoria {
  guardarCambios(categoria: CrearCategoriaDTO){
    console.log("Creando categoria", categoria)
  }

}
