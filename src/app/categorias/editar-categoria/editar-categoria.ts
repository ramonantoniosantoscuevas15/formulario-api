import { Component, Input, numberAttribute } from '@angular/core';
import { transform } from 'typescript';

@Component({
  selector: 'app-editar-categoria',
  imports: [],
  templateUrl: './editar-categoria.html',
  styleUrl: './editar-categoria.css',
})
export class EditarCategoria {
  @Input({transform: numberAttribute})
  id!:number

}
