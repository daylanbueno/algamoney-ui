import { LancamentoService, LancamentoFilter } from './../lancamento.service';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-lancamento-pesquisa',
  templateUrl: './lancamento-pesquisa.component.html',
  styleUrls: ['./lancamento-pesquisa.component.css']
})
export class LancamentoPesquisaComponent  implements OnInit {
  descricao: String;
  dataVencimentoInicio: Date;
  dataVencimentoFim: Date;
  lancamentos = [];

  constructor(private lancamentoService: LancamentoService) {}
   ngOnInit() {
    this.pesquisar();

  }
  pesquisar() {
    const filter: LancamentoFilter = {
      descricao = this.descricao,
      dataVencimentoInicio = this.dataVencimentoInicio,
      dataVencimentoInicio = this.dataVencimentoFim
    };

    this.lancamentoService.pesquisar({ filter })
    .then(lancamentos => this.lancamentos = lancamentos);
  }

}
