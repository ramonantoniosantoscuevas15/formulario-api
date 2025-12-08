import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-categorias',
  imports: [MatButtonModule],
  templateUrl: './crear-categorias.html',
  styleUrl: './crear-categorias.css',
})
export class CrearCategorias {
  router = inject(Router)

  guardarCambios(){
    //...guardar cambios
    this.router.navigate(['/categorias'])
  }

}
