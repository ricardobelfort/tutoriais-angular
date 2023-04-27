import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Curso } from '../models/curso';

@Injectable({
  providedIn: 'root',
})
export class CursoService {
  private readonly API = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  list() {
    return this.http.get<Curso[]>(`${this.API}/cursos`);
  }
}
