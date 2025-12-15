import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-filtro-personas',
  imports: [MatButtonModule,MatFormFieldModule,ReactiveFormsModule,MatInputModule,MatSelectModule,MatCheckboxModule],
  templateUrl: './filtro-personas.html',
  styleUrl: './filtro-personas.css',
})
export class FiltroPersonas {
  private fb = inject(FormBuilder)

  form = this.fb.group({
    nombre: '',
    apellido: '',
    categoriaid: 0
  })

  categorias= [
    {id:1, tipo:"Empleado"},
    {id:2, tipo:"Visitante"},
    {id:3, tipo:"Proveedor"},
  ]

}
