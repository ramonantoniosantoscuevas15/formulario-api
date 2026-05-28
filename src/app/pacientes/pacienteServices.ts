import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';
import { Observable } from 'rxjs';
import { CursoEstudiantedto } from './pacientedto';


@Injectable({
  providedIn: 'root',
})
export class PacienteServices {
  private http = inject(HttpClient)
  private urlbase = environment.apiUrl + '/estudiantes'

  public crearget():Observable<CursoEstudiantedto>{
    return this.http.get<CursoEstudiantedto>(`${this.urlbase}/PostCurso`)
  }
}
