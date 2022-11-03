import { Component, OnInit } from '@angular/core';
import { DeleteService } from '../delete.service';
import { CURSOS } from './ListaCursos';
import { Cursos } from './listaInterface';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss']
})
export class CrudComponent implements OnInit {

  constructor(private deleteservice: DeleteService) { }

  ngOnInit(): void {
  }

  selectedLista?: Cursos
  Cursos = CURSOS




  CursoSelect(Curso: Cursos): void {
    this.selectedLista = Curso

  }
  deleteCurso(cursos: Cursos) {
    alert("Curso deletado")
    this.Cursos = this.deleteservice.remove(this.Cursos, cursos)
  }


}
