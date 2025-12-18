import { Component, Input, ViewChild, viewChild } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule, MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTable, MatTableModule } from '@angular/material/table';
import { AutocompleCorreosDTO } from '../correo';
import { ɵEmptyOutletComponent } from "@angular/router";

@Component({
  selector: 'app-autocomple-correos',
  imports: [ReactiveFormsModule, MatFormFieldModule, FormsModule, MatInputModule, MatAutocompleteModule, MatTableModule, ],
  templateUrl: './autocomple-correos.html',
  styleUrl: './autocomple-correos.css',
})
export class AutocompleCorreos {
  control = new FormControl

  emails: AutocompleCorreosDTO[] = [
    {
      nombre: 'Ramon', correos: '',

    }, {
      nombre: 'Roberto', correos: '',

    },
  ]
  @ViewChild(MatTable) table!: MatTable<AutocompleCorreosDTO>
  columnasAmostrar = ['nombre','correos']
  @Input({required:true})
  correoSelecionandos:AutocompleCorreosDTO[]=[]
  correoSelecionando(event:MatAutocompleteSelectedEvent){
    this.correoSelecionandos.push(event.option.value)
    this.control.patchValue('')
    if(this.table != undefined){
      this.table.renderRows()
    }
  }



}
