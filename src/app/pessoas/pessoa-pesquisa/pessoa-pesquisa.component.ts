import { PessoaService } from './../pessoa.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pessoa-pesquisa',
  templateUrl: './pessoa-pesquisa.component.html',
  styleUrls: ['./pessoa-pesquisa.component.css']
})
export class PessoaPesquisaComponent implements OnInit {
  nome: string;
  pessoas = [];
  constructor(private pessoaService: PessoaService) {}

  ngOnInit() {
    this.listar();
  }

  listar() {
    this.pessoaService.listar()
    .then(pessoas => this.pessoas = pessoas);
  }

  pesquisar() {
    this.pessoaService.pesquisar(this.nome)
    .then(pessoas => this.pessoas = pessoas);
  }

}
