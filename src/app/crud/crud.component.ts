import { Component, OnInit } from '@angular/core';
import { CURSOS } from './ListaCursos';
import { Cursos } from './listaInterface';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss']
})
export class CrudComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  Lista: Cursos[] = []
  Cursos = CURSOS

}
