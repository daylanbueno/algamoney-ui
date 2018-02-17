import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loncamento-pesquisa',
  templateUrl: './loncamento-pesquisa.component.html',
  styleUrls: ['./loncamento-pesquisa.component.css']
})
export class LoncamentoPesquisaComponent {

  title = 'app';

  lancamentos = [
         { tipo: 'DESPESA', descricao: 'Compra de pão', dataVencimento: new Date(2017, 5, 30),
           dataPagamento: null, valor: 4.55, pessoa: 'Padaria do José' },
         { tipo: 'RECEITA', descricao: 'Venda de software', dataVencimento: new Date(2018, 5, 10),
           dataPagamento: '09/06/2017', valor: 80000, pessoa: 'Atacado Brasil' },
         { tipo: 'DESPESA', descricao: 'Impostos', dataVencimento: new Date(2018, 5, 10),
           dataPagamento: null, valor: 14312, pessoa: 'Ministério da Fazenda' },
         { tipo: 'DESPESA', descricao: 'Mensalidade de escola', dataVencimento :new Date(2017, 5, 10),
           dataPagamento: '30/05/2017', valor: 800, pessoa: 'Escola Abelha Rainha' },
         { tipo: 'RECEITA', descricao: 'Venda de carro', dataVencimento: new Date(2019, 5, 10),
           dataPagamento: null, valor: 55000, pessoa: 'Sebastião Souza' },
         { tipo: 'DESPESA', descricao: 'Aluguel', dataVencimento: new Date(2022, 5, 10),
           dataPagamento: '09/07/2017', valor: 1750, pessoa: 'Casa Nova Imóveis' },
         { tipo: 'DESPESA', descricao: 'Mensalidade musculação', dataVencimento: new Date(2017, 5, 10),
           dataPagamento: null, valor: 180, pessoa: 'Academia Top' }
       ];


}
