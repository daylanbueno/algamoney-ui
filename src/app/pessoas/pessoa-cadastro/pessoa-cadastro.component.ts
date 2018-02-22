import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pessoa-cadastro',
  templateUrl: './pessoa-cadastro.component.html',
  styleUrls: ['./pessoa-cadastro.component.css']
})
export class PessoaCadastroComponent {

  municipios = [
    { label : 'Brasília',  value : 1},
    { label : 'Goiânia',  value : 2},
  ];


  estados = [
    { label : 'Distrito Federal',  value : 1},
    { label : 'Goias',  value : 2},
  ];
}
