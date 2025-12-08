import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-indice-categorias',
  imports: [RouterLink,MatButtonModule],
  templateUrl: './indice-categorias.html',
  styleUrl: './indice-categorias.css',
})
export class IndiceCategorias {

}
