import { Component, Input, numberAttribute } from '@angular/core';

@Component({
  selector: 'app-editar-dirrecion',
  imports: [],
  templateUrl: './editar-dirrecion.html',
  styleUrl: './editar-dirrecion.css',
})
export class EditarDirrecion {
  @Input({ transform: numberAttribute })
  id!: number

}
