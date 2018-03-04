import { LancamentoService } from './../lancamento.service';
import { PessoaService } from './../../pessoas/pessoa.service';
import { Component, OnInit,Input } from '@angular/core';
import { LancamentoPesquisaComponent } from '../lancamento-pesquisa/lancamento-pesquisa.component';

@Component({
  selector: 'app-lancamento-grid',
  templateUrl: './lancamento-grid.component.html',
  styleUrls: ['./lancamento-grid.component.css']
})
export class LancamentoGridComponent {

  constructor(private pesquisarComponent: LancamentoPesquisaComponent , private lancamentoService: LancamentoService) {}
   @Input() lancamentos = [];

   excluir(lancamento: any) {
    this.lancamentoService.excluir(lancamento.codigo)
    .then(() => {
      this.pesquisarComponent.ngOnInit();
    });
   }

}
