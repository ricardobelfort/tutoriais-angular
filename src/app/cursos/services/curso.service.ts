import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, take } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Curso } from '../models/curso';

@Injectable({
  providedIn: 'root',
})
export class CursoService {
  private readonly API = environment.API;

  constructor(private http: HttpClient) {}

  list() {
    return this.http
      .get<Curso[]>(`${this.API}cursos`)
      .pipe(delay(2000), take(1));
  }
}
