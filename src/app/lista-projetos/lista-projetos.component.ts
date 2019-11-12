import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { THROW_IF_NOT_FOUND } from '@angular/core/src/di/injector';
import { ProjetoApiService } from '../service/projeto-api.service';

@Component({
  selector: 'has-lista-projetos',
  templateUrl: './lista-projetos.component.html',
  styleUrls: ['./lista-projetos.component.css']
})
export class ListaProjetosComponent implements OnInit {
  projetos : Projeto[];
  
  constructor(private router: Router,
              private service: ProjetoApiService) { }

  ngOnInit() {
    this.service.getProjetos()
                .subscribe((dados : Projeto[]) => this.projetos = dados, 
                            error => console.log(error));
  }

  detalhes(id:number)
  {
    this.router.navigate(['detalhe-projeto',id]);
  }

}
