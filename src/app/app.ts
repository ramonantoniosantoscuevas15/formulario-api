import { Component, OnInit, signal } from '@angular/core';
import { ListadoPersonas } from './personas/listado-personas/listado-personas';
import { Menu } from "./compartidos/componentes/menu/menu";

@Component({
  selector: 'app-root',
  imports: [ListadoPersonas, Menu],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  ngOnInit(): void {
    setTimeout(() => {
      this.PersonasAgregadas = [
        {
          nombre: "Ramon",
          apellido: "santos",
          cedula: "123"
        },
        {
          nombre: "Alex",
          apellido: " guzman",
          cedula: '123654'
        },
        {
          nombre: "jose",
          apellido: "zapata",
          cedula: "7896541"
        }
      ]

    }, 1000);


  }
  PersonasAgregadas!: any[]


  protected readonly title = signal('formulario');



}
