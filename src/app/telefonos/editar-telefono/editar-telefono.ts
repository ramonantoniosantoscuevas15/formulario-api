import { Component, Input, numberAttribute } from '@angular/core';

@Component({
  selector: 'app-editar-telefono',
  imports: [],
  templateUrl: './editar-telefono.html',
  styleUrl: './editar-telefono.css',
})
export class EditarTelefono {
  @Input({ transform: numberAttribute })
  id!: number

}
