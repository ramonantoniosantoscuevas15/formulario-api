import { Component, Input, input } from '@angular/core';
import { SelectorDTO } from '../compartidos/componentes/selector/selectordto';
import { Selector } from "../compartidos/componentes/selector/selector";

@Component({
  selector: 'app-pacientes',
  imports: [Selector],
  templateUrl: './pacientes.html',
})
export class Pacientes {
 
  @Input({required:true})cursonoseleccionado!:SelectorDTO[]
  @Input({required:true}) cursoseleccionado!:SelectorDTO[]
}
