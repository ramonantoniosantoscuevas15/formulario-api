import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { ListadoPersonas } from "../listado-personas/listado-personas";
import { FiltroPersona } from './filtropersona';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-filtro-personas',
  imports: [MatButtonModule, MatFormFieldModule, ReactiveFormsModule, MatInputModule, MatSelectModule, MatCheckboxModule, ListadoPersonas],
  templateUrl: './filtro-personas.html',
  styleUrl: './filtro-personas.css',
})
export class FiltroPersonas implements OnInit {
  ngOnInit(): void {
    this.leerValoresUrl()
    this.buscarPersonas(this.form.value as FiltroPersona)
    this.form.valueChanges.subscribe(valores => {
      this.personas = this.personasOriginal
      this.buscarPersonas(valores as FiltroPersona)
      this.escribirParametrosBusquedaEnUrl(valores as FiltroPersona)

    })
  }
  escribirParametrosBusquedaEnUrl(valores:FiltroPersona){
    let queryString=[]
    if(valores.nombre){
      queryString.push(`nombre=${encodeURI(valores.nombre) }`)
    }
    if(valores.categoriaid !==0){
      queryString.push(`categoriaid=${valores.categoriaid}`)
    }
    this.location.replaceState('personas/filtro',queryString.join('&'))

  }
  limpiar(){
    this.form.patchValue({nombre:'',categoriaid:0})
  }
  buscarPersonas(valores:FiltroPersona){
    if(valores.nombre){
      this.personas = this.personas.filter(persona=> persona.nombre.indexOf(valores.nombre)!== -1)
    }

    if(valores.categoriaid !== 0){
      this.personas = this.personas.filter(persona => persona.categorias.indexOf(valores.categoriaid) !== -1)
    }

  }
  leerValoresUrl(){
    this.activatedRoute.queryParams.subscribe((params:any)=>{
      var objeto: any={}
      if(params.nombre){
        objeto.nombre = params.nombre
      }
      if(params.categoriaid){
        objeto.categoriaid = Number(params.categoriaid)
      }
      this.form.patchValue(objeto)
    })
  }
  private fb = inject(FormBuilder)
  private location = inject(Location)
  private activatedRoute = inject(ActivatedRoute)

  form = this.fb.group({
    nombre: '',
    categoriaid: 0
  })

  categorias = [
    { id: 1, tipo: "Empleado" },
    { id: 2, tipo: "Visitante" },
    { id: 3, tipo: "Proveedor" },
  ]

  personasOriginal = [
    {
      nombre: "Ramon",
      apellido: "santos",
      cedula: "123",
      categorias:[2,3]
    },
    {
      nombre: "Alex",
      apellido: " guzman",
      cedula: '123654',
      categorias:[1]
    },
    {
      nombre: "jose",
      apellido: "zapata",
      cedula: "7896541",
      categorias:[3]
    }
  ]

  personas= this.personasOriginal


}
