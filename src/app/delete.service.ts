import { animateChild } from '@angular/animations';
import { Injectable } from '@angular/core';
import { Cursos } from './crud/listaInterface';

@Injectable({
  providedIn: 'root'
})
export class DeleteService {

  constructor() { }
  remove(cursos: Cursos[], curso: Cursos) {
    return cursos.filter((c) => curso.name !== c.name)
  }
}
