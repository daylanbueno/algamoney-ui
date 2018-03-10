import { PessoaPesquisaComponent } from './../pessoa-pesquisa/pessoa-pesquisa.component';
import { ConfirmationService } from 'primeng/api';
import { Component, OnInit, Input } from '@angular/core';
import { PessoaService } from '../pessoa.service';
import { ErrosHandlerService } from '../../core/erros-handler.service';
import { ToastyService } from 'ng2-toasty';

@Component({
  selector: 'app-pessoa-grid',
  templateUrl: './pessoa-grid.component.html',
  styleUrls: ['./pessoa-grid.component.css']
})
export class PessoaGridComponent {

  constructor(
   private confimacaoService: ConfirmationService,
   private pessoaService: PessoaService,
   private erroHandlerService: ErrosHandlerService,
   private toastService: ToastyService,
   private pesquisarPessoaComponet: PessoaPesquisaComponent
  ) { }

   @Input() pessoas = [];

   excluir(pessoa: any) {
    this.confimacaoService.confirm({
      message: 'Desejá reamente excluir essa pessoa',
      accept: () => {
        this.efetuarExclusao(pessoa);
      }
    });
   }

   efetuarExclusao(pessoa: any) {
    console.log('codigo', pessoa.codigo);
     this.pessoaService.excluir(pessoa.codigo)
    .then(() => {
      this.pesquisarPessoaComponet.ngOnInit();
      this.toastService.success('Operação realizada com sucesso');
    }).catch(erro => this.erroHandlerService.handle(erro));
   }
}
