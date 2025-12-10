import { Component, Input } from '@angular/core';
import { SelectorMultipleDTO } from './SelectorMultipleModelo';

@Component({
  selector: 'app-selector-multiple',
  imports: [],
  templateUrl: './selector-multiple.html',
  styleUrl: './selector-multiple.css',
})
export class SelectorMultiple {
  @Input({required: true})
  Seleccionados!:SelectorMultipleDTO[];

  @Input({required: true})
  NoSeleccionados!:SelectorMultipleDTO[];

  seleccionar(elemento: SelectorMultipleDTO,indice: number){
    this.Seleccionados.push(elemento)
    this.NoSeleccionados.slice(indice,1)
  }

}
