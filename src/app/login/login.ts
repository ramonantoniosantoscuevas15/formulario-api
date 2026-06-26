import { Component, EventEmitter, inject, Output } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormUtilidades } from '../compartidos/componentes/form-utilidades';
import { CredencialesUsuariodto } from '../security/seguridaddto';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, FormsModule, FormsModule,MatInputModule, MatFormFieldModule,],
  templateUrl: './login.html',
})
export class Login {
   @Output() postlogin = new EventEmitter<CredencialesUsuariodto>
  formutilidades = FormUtilidades
  private fb = inject(FormBuilder)
  form = this.fb.group({
    Email:['',[Validators.required,Validators.pattern(this.formutilidades.emailPattern)]],
    Password:['',{validators:[Validators.required,Validators.minLength(4)]}]
  })
  guardarlogin(){
    const login = this.form.value as CredencialesUsuariodto
    this.postlogin.emit(login)
  }
}
