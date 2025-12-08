import { Component, OnInit } from '@angular/core';
import { ListadoPersonas } from "../personas/listado-personas/listado-personas";

@Component({
  selector: 'app-landing-page',
  imports: [ListadoPersonas],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.css',
})
export class LandingPage implements OnInit {
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

}
