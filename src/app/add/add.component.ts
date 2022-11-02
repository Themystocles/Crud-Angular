import { Component, Input, OnInit } from '@angular/core';
import { runInThisContext } from 'vm';
import { CURSOS } from '../crud/ListaCursos';
import { Cursos } from '../crud/listaInterface';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  @Input() Curso = CURSOS


  constructor() { }
  name!: string
  value!: number

  show = ""
  Adcshow() {
    this.show = "ok"
  }

  ngOnInit(): void {
  }
  Adcionar(name: string, value: number) {
    this.Curso.push({ name, value })
    this.show = ""
  }
}
