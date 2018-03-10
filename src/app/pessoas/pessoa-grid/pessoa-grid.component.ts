import { ConfirmationService } from 'primeng/api';
import { Component, OnInit, Input } from '@angular/core';
import { PessoaService } from '../pessoa.service';

@Component({
  selector: 'app-pessoa-grid',
  templateUrl: './pessoa-grid.component.html',
  styleUrls: ['./pessoa-grid.component.css']
})
export class PessoaGridComponent {

  constructor(
   private confimacaoService: ConfirmationService,
   private pessoaService: PessoaService
  ) { }

   @Input() pessoas = [];

   excluir(pessoa: any) {
    this.confimacaoService.confirm({
      message: 'Desejá reamente excluir essa pessoa',
      accept: () => {
        console.log(pessoa);
        this.pessoaService.excluir(pessoa);
      }
    });
   }

}
