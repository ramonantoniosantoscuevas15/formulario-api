import { Component, Input, numberAttribute } from '@angular/core';

@Component({
  selector: 'app-editar-email',
  imports: [],
  templateUrl: './editar-email.html',
  styleUrl: './editar-email.css',
})
export class EditarEmail {
  @Input({ transform: numberAttribute })
  id!: number

}
