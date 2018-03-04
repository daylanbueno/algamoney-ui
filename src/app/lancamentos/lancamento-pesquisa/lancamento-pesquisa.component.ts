import { LancamentoService, LancamentoFilter } from './../lancamento.service';
import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core/src/metadata/directives';



@Component({
  selector: 'app-lancamento-pesquisa',
  templateUrl: './lancamento-pesquisa.component.html',
  styleUrls: ['./lancamento-pesquisa.component.css']
})
export class LancamentoPesquisaComponent  implements OnInit {
  descricao: string;
  dataVencimentoInicio: Date;
  dataVencimentoFim: Date;
  lancamentos = [];
  pt_BR: any;

  constructor(private lancamentoService: LancamentoService) {}
   ngOnInit() {
    this.pesquisar();
    this.tradutorCalendario();
  }
  pesquisar() {
    const filtro: LancamentoFilter = {
             descricao: this.descricao,
             dataVencimentoInicio: this.dataVencimentoInicio,
             dataVencimentoFim: this.dataVencimentoFim
      };
      console.log(filtro);
    this.lancamentoService.pesquisar(filtro)
    .then(lancamentos => this.lancamentos = lancamentos);
  }


  limpar(): void {
    this.descricao = null;
    this.dataVencimentoInicio = null;
    this.dataVencimentoFim = null;
    }

  tradutorCalendario() {
    this.pt_BR = {
      firstDayOfWeek: 0,
      dayNames: [ 'Domingo' , 'Segunda' , 'Terça' , 'Quarta' , 'Quinta' , 'Sexta' , 'Sábado' ],
      dayNamesShort: [ 'dom' , 'seg' , 'ter' , 'qua' , 'qui' , ' sex' ,  ' sáb' ],
      dayNamesMin: [ 'D' , 'S' , 'T' , 'Q' , 'Q' , 'S' , 'S' ],
      // tslint:disable-next-line:max-line-length
      monthNames: [ 'Janeiro' , 'Fevereiro' , 'Março' , 'Abril' , 'Maio' , 'Junho' , 'Julho' , 'Agosto' , 'Setembro' , 'Outubro' , 'Novembro' , 'Dezembro' ],
      monthNamesShort: [ 'Jan' , 'Fev' , 'Mar' , 'Abr' , 'Mai', 'Jun' , 'Jul' , 'Ago' , 'Set' , 'Out' , 'Nov','Dez' ]
    };
  }
}
