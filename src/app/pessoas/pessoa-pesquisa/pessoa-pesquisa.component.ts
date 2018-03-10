import { PessoaService } from './../pessoa.service';
import { Component, OnInit } from '@angular/core';
import { ErrosHandlerService } from '../../core/erros-handler.service';

@Component({
  selector: 'app-pessoa-pesquisa',
  templateUrl: './pessoa-pesquisa.component.html',
  styleUrls: ['./pessoa-pesquisa.component.css']
})
export class PessoaPesquisaComponent implements OnInit {
  nome: string;
  pessoas = [];
  constructor(
    private pessoaService: PessoaService,
    private erroHandlerService: ErrosHandlerService
  ) {}

  ngOnInit() {
    this.pesquisar();
  }

  pesquisar() {
    this.pessoaService.pesquisar(this.nome)
    .then(pessoas => this.pessoas = pessoas)
    .catch(erro => this.erroHandlerService.handle(erro));
  }

}
