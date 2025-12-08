import { Component, OnInit, signal } from '@angular/core';


import { MatAnchor, MatButtonModule } from "@angular/material/button";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [MatButtonModule,RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App  {



  protected readonly title = signal('formulario');



}
