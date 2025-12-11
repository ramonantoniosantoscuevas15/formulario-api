import { Component } from '@angular/core';
import { FormArray, FormControl, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatFormField, MatInput } from '@angular/material/input';

@Component({
  selector: 'app-emails',
  imports: [MatFormFieldModule, MatFormField, MatInput],
  templateUrl: './emails.html',
  styleUrl: './emails.css',
})
export class Emails {
  protected correo = new FormArray<FormControl<string>>([
    new FormControl<string>('',{
      nonNullable:true,
      validators:[
        Validators.required,
        Validators.email
      ]
    })
  ])

}
