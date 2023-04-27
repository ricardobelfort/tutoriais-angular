import { Component, OnInit } from '@angular/core';
import { Curso } from '../models/curso';
import { CursoService } from '../services/curso.service';

@Component({
  selector: 'app-curso-list',
  templateUrl: './curso-list.component.html',
  styleUrls: ['./curso-list.component.css'],
})
export class CursoListComponent implements OnInit {
  cursos: Curso[] = [];
  constructor(private cursoService: CursoService) {}

  ngOnInit(): void {
    this.cursoService.list().subscribe((res) => (this.cursos = res));
  }
}
