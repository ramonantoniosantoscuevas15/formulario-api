import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { primeraLetraMayuscula } from '../compartidos/funciones/validaciones';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CrearDirrecionDTO, DirrecionDTO } from './direccion';

@Component({
  selector: 'app-dirreciones',
  imports: [MatButtonModule, MatFormFieldModule, ReactiveFormsModule, MatInputModule,],
  templateUrl: './dirreciones.html',
  styleUrl: './dirreciones.css',
})
export class Dirreciones  {



  @Input()
  postDirrecion :CrearDirrecionDTO[]=[]
  private fb = inject(FormBuilder)
  form = this.fb.group({
    tipo: ['', { validators: [Validators.required, primeraLetraMayuscula()] }],
    ubicacion: ['', { validators: [Validators.required, primeraLetraMayuscula()] }],
    ciudad: ['', { validators: [Validators.required, primeraLetraMayuscula()] }],
    provincia: ['', { validators: [Validators.required, primeraLetraMayuscula()] }],
    codigopostal: ['', { validators: [Validators.required] }],
    pais: ['', { validators: [Validators.required, primeraLetraMayuscula()] }],

  })

  obtenerErrorTipo(): string {
    let tipo = this.form.controls.tipo
    if (tipo.hasError('required')) {
      return "El Campo Tipo es Requerido"
    }
    if (tipo.hasError('primeraLetraMayuscula')) {
      return tipo.getError('primeraLetraMayuscula').mensaje
    }
    return ""
  }

  obtenerErrorubicacion(): string {
    let ubicacion = this.form.controls.ubicacion
    if (ubicacion.hasError('required')) {
      return "El Campo Ubicacion es Requerido"
    }
    if (ubicacion.hasError('primeraLetraMayuscula')) {
      return ubicacion.getError('primeraLetraMayuscula').mensaje
    }
    return ""
  }
  obtenerErrorciudad(): string {
    let ciudad = this.form.controls.ciudad
    if (ciudad.hasError('required')) {
      return "El Campo Ciudad es Requerido"
    }
    if (ciudad.hasError('primeraLetraMayuscula')) {
      return ciudad.getError('primeraLetraMayuscula').mensaje
    }
    return ""
  }

  obtenerErrorcodigopostal(): string {
    let codigopostal = this.form.controls.codigopostal
    if (codigopostal.hasError('required')) {
      return "El Campo Codigo Postal es Requerido"
    }

    return ""
  }

    obtenerErrorprovincia(): string {
    let provincia = this.form.controls.provincia
    if (provincia.hasError('required')) {
      return "El Campo Provincia es Requerido"
    }
    if (provincia.hasError('primeraLetraMayuscula')) {
      return provincia.getError('primeraLetraMayuscula').mensaje
    }
    return ""
  }

      obtenerErrorpais(): string {
    let pais = this.form.controls.pais
    if (pais.hasError('required')) {
      return "El Campo Pais es Requerido"
    }
    if (pais.hasError('primeraLetraMayuscula')) {
      return pais.getError('primeraLetraMayuscula').mensaje
    }
    return ""
  }


  guardarCambios(){
    if (!this.form.valid) {
      return
    }
    //const dirrecion = this.form.value as CrearDirrecionDTO
    //this.postFormulario.emit(dirrecion)
  }


}
// export class Dirreciones implements OnInit {
//   ngOnInit(): void {
//     throw new Error('Method not implemented.');
//   }
//   @Input()
//   modelo?: DirrecionDTO
//   @Output()
//   postFormulario = new EventEmitter<CrearDirrecionDTO>
//   private fb = inject(FormBuilder)
//   form = this.fb.group({
//     tipo: ['', { validators: [Validators.required, primeraLetraMayuscula()] }],
//     ubicacion: ['', { validators: [Validators.required, primeraLetraMayuscula()] }],
//     ciudad: ['', { validators: [Validators.required, primeraLetraMayuscula()] }],
//     provincia: ['', { validators: [Validators.required, primeraLetraMayuscula()] }],
//     codigopostal: ['', { validators: [Validators.required] }],
//     pais: ['', { validators: [Validators.required, primeraLetraMayuscula()] }],

//   })

//   obtenerErrorTipo(): string {
//     let tipo = this.form.controls.tipo
//     if (tipo.hasError('required')) {
//       return "El Campo Tipo es Requerido"
//     }
//     if (tipo.hasError('primeraLetraMayuscula')) {
//       return tipo.getError('primeraLetraMayuscula').mensaje
//     }
//     return ""
//   }

//   obtenerErrorubicacion(): string {
//     let ubicacion = this.form.controls.ubicacion
//     if (ubicacion.hasError('required')) {
//       return "El Campo Ubicacion es Requerido"
//     }
//     if (ubicacion.hasError('primeraLetraMayuscula')) {
//       return ubicacion.getError('primeraLetraMayuscula').mensaje
//     }
//     return ""
//   }
//   obtenerErrorciudad(): string {
//     let ciudad = this.form.controls.ciudad
//     if (ciudad.hasError('required')) {
//       return "El Campo Ciudad es Requerido"
//     }
//     if (ciudad.hasError('primeraLetraMayuscula')) {
//       return ciudad.getError('primeraLetraMayuscula').mensaje
//     }
//     return ""
//   }

//   obtenerErrorcodigopostal(): string {
//     let codigopostal = this.form.controls.codigopostal
//     if (codigopostal.hasError('required')) {
//       return "El Campo Codigo Postal es Requerido"
//     }

//     return ""
//   }

//     obtenerErrorprovincia(): string {
//     let provincia = this.form.controls.provincia
//     if (provincia.hasError('required')) {
//       return "El Campo Provincia es Requerido"
//     }
//     if (provincia.hasError('primeraLetraMayuscula')) {
//       return provincia.getError('primeraLetraMayuscula').mensaje
//     }
//     return ""
//   }

//       obtenerErrorpais(): string {
//     let pais = this.form.controls.pais
//     if (pais.hasError('required')) {
//       return "El Campo Pais es Requerido"
//     }
//     if (pais.hasError('primeraLetraMayuscula')) {
//       return pais.getError('primeraLetraMayuscula').mensaje
//     }
//     return ""
//   }

//   guardarCambios(){
//     if (!this.form.valid) {
//       return
//     }
//     const dirrecion = this.form.value as CrearDirrecionDTO
//     this.postFormulario.emit(dirrecion)
//   }


// }
