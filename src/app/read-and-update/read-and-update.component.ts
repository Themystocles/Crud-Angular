import { Component, Input, OnInit } from '@angular/core';
import { Cursos } from '../crud/listaInterface';




@Component({
  selector: 'app-read-and-update',
  templateUrl: './read-and-update.component.html',
  styleUrls: ['./read-and-update.component.scss']
})
export class ReadAndUpdateComponent implements OnInit {
  @Input() CursoSelected?: Cursos



  clean(): void {
    this.CursoSelected = undefined

  }

  constructor() { }



  ngOnInit(): void {
  }



}
