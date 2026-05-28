import { Component, Input } from '@angular/core';
import { SelectorDTO } from './selectordto';

@Component({
  selector: 'app-selector',
  imports: [],
  templateUrl: './selector.html',
})
export class Selector {
   @Input({required: true})
  Seleccionados!:SelectorDTO[];

  @Input({required: true})
  NoSeleccionados!:SelectorDTO[];

  seleccionar(elemento: SelectorDTO,indice: number){
    this.Seleccionados.push(elemento)
    this.NoSeleccionados.slice(indice,1)
  }

  deseleccionar(elemento: SelectorDTO, indice: number){
    this.Seleccionados.push(elemento)
    this.NoSeleccionados.splice(indice,1)
  }

  seleccionarTodo(){
    this.Seleccionados.push(...this.NoSeleccionados)
    this.NoSeleccionados.length = 0
  }

  deseleccionarTodo(){
    this.NoSeleccionados.push(...this.Seleccionados);
    this.Seleccionados.length = 0
  }
}
