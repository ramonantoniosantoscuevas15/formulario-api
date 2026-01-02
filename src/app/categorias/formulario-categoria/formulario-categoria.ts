import { Component, inject } from '@angular/core';
import { CrearCategoriaDTO } from '../crear-categorias/categoria';
import { CrearCategorias } from "../crear-categorias/crear-categorias";
import { Router } from '@angular/router';
import { Categorias } from '../categorias';

@Component({
  selector: 'app-formulario-categoria',
  imports: [CrearCategorias],
  templateUrl: './formulario-categoria.html',
  styleUrl: './formulario-categoria.css',
})
export class FormularioCategoria {
  private router = inject(Router)
  private categoriasServices = inject(Categorias)

  guardarCambios(categoria: CrearCategoriaDTO){
    this.categoriasServices.crearCategoria(categoria).subscribe(()=>{
      this.router.navigate(['/categorias'])
    })
  }

}
