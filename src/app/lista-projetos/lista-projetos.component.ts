import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { THROW_IF_NOT_FOUND } from '@angular/core/src/di/injector';

@Component({
  selector: 'has-lista-projetos',
  templateUrl: './lista-projetos.component.html',
  styleUrls: ['./lista-projetos.component.css']
})
export class ListaProjetosComponent implements OnInit {
  projetos=
  [
    {"nome":"projeto1","sala":"l08","turma":"2Q"},
    {"nome":"projeto2","sala":"l07","turma":"1Q"}
  ];
  constructor(private router: Router) { }

  ngOnInit() {
  }

  detalhes(id:number)
  {
    this.router.navigate(['detalhe-projeto',id]);
  }

}
