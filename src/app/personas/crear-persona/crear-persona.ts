import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-crear-persona',
  imports: [RouterLink,MatButtonModule],
  templateUrl: './crear-persona.html',
  styleUrl: './crear-persona.css',
})
export class CrearPersona {

}
