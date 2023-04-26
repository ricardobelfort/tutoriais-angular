import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosRoutingModule } from './cursos-routing.module';
import { CursoListComponent } from './curso-list/curso-list.component';


@NgModule({
  declarations: [
    CursoListComponent
  ],
  imports: [
    CommonModule,
    CursosRoutingModule
  ]
})
export class CursosModule { }
