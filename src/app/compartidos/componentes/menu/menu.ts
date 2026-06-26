import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink } from "@angular/router";
import { Autorizado } from "../../../autorizado/autorizado";

@Component({
  selector: 'app-menu',
  imports: [MatToolbarModule, MatIconModule, MatButtonModule, RouterLink, Autorizado],
  templateUrl: './menu.html',
  styleUrl: './menu.css',
})
export class Menu {

}
