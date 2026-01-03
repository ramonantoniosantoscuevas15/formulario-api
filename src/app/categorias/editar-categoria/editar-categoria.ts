import { Component, inject, Inject, Input, numberAttribute, OnInit } from '@angular/core';
import { transform } from 'typescript';
import { CategoriaDTO, CrearCategoriaDTO } from '../crear-categorias/categoria';
import { Categorias } from '../categorias';
import { FormularioCategoria } from "../formulario-categoria/formulario-categoria";
import { CrearCategorias } from "../crear-categorias/crear-categorias";
import { Cargando } from "../../compartidos/componentes/cargando/cargando";
import { Router } from '@angular/router';


@Component({
  selector: 'app-editar-categoria',
  imports: [CrearCategorias, Cargando],
  templateUrl: './editar-categoria.html',
  styleUrl: './editar-categoria.css',
})
export class EditarCategoria implements OnInit{
  ngOnInit(): void {
    this.categoriasServices.obtenerPorid(this.id).subscribe(categoria=>{
      this.categoria = categoria
    })

  }
  @Input({transform: numberAttribute})
  id!:number
  categoria?: CategoriaDTO
  private categoriasServices = inject(Categorias)
  private router = inject(Router)

  guardarCambios(categoria:CrearCategoriaDTO){
    this.categoriasServices.actualizar(this.id,categoria).subscribe(()=>{
      this.router.navigate(['/categorias'])
    })
  }

  }


