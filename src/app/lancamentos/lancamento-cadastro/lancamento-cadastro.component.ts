import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lancamento-cadastro',
  templateUrl: './lancamento-cadastro.component.html',
  styleUrls: ['./lancamento-cadastro.component.css']
})
export class LancamentoCadastroComponent implements OnInit {

  pt_BR: any;

  tipos =  [
    { label : 'Receita', value : 'RECEITA' },
    { label : 'Despesa', value: 'DESPESA' },
  ];

  categorias = [
    { label : 'Alimentação', value: 1 } ,
    { label : 'Gasolina', value: 2 },
  ];

  pessoas = [
    { label: 'Dailan Bueno dos Santos', value : 1 },
    { label: 'Eduardo Siqueira da Silva', value: 2 },
    { label: 'Monica Siqueira da Silva', value: 3 },
  ];

  constructor() { }

  ngOnInit() {
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
