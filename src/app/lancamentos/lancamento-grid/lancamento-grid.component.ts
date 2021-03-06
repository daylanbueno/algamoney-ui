import { LancamentoService } from './../lancamento.service';
import { PessoaService } from './../../pessoas/pessoa.service';
import { Component, OnInit, Input } from '@angular/core';
import { LancamentoPesquisaComponent } from '../lancamento-pesquisa/lancamento-pesquisa.component';
import { ToastyService } from 'ng2-toasty';
import {ConfirmationService} from 'primeng/api';
import { error } from 'util';
import { ErrosHandlerService } from '../../core/erros-handler.service';

@Component({
  selector: 'app-lancamento-grid',
  templateUrl: './lancamento-grid.component.html',
  styleUrls: ['./lancamento-grid.component.css']
})
export class LancamentoGridComponent {

  constructor(
    private pesquisarComponent: LancamentoPesquisaComponent,
    private lancamentoService: LancamentoService,
    private toastyService: ToastyService,
    private confirmacaoServico: ConfirmationService,
    private erroHandlerService: ErrosHandlerService
    ) {}
   @Input() lancamentos = [];

    excluir(lancamento: any) {
      this.confirmacaoServico.confirm({
        message: 'Deseja realmente efetuar essa exclusão?',
        accept: () => {
           this.efetuarExclusao(lancamento);
          }
       });
   }

efetuarExclusao(lancamento: any) {
  this.lancamentoService.excluir(lancamento.codigo)
  .then(() => {
      this.pesquisarComponent.ngOnInit();
      this.toastyService.success('Operação realizada com sucesso!');
  })
  .catch(erro => this.erroHandlerService.handle(erro));
}

}
