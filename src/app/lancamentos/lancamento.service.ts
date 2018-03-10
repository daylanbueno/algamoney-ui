import { Injectable } from '@angular/core';
import { Http , Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { URLSearchParams } from '@angular/http';
import * as moment from 'moment';

export interface LancamentoFilter {
  descricao: string;
  dataVencimentoInicio: Date;
  dataVencimentoFim: Date;
}

@Injectable()
export class LancamentoService {
  lancamentosUrl = 'http://localhost:8080/lancamento';
  toke = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1MjA3MDg3MTksInVzZXJfbmFtZSI6ImFkbWluQGdtYWlsLmNvbSIsImF1dGhvcml0aWVzIjpbIlJPTEVfQ0FEQVNUUkFSX0NBVEVHT1JJQSIsIlJPTEVfUEVTUVVJU0FSX1BFU1NPQSIsIlJPTEVfUkVNT1ZFUl9QRVNTT0EiLCJST0xFX0NBREFTVFJBUl9MQU5DQU1FTlRPIiwiUk9MRV9QRVNRVUlTQVJfTEFOQ0FNRU5UTyIsIlJPTEVfUkVNT1ZFUl9MQU5DQU1FTlRPIiwiUk9MRV9DQURBU1RSQVJfUEVTU09BIiwiUk9MRV9QRVNRVUlTQVJfQ0FURUdPUklBIl0sImp0aSI6IjlmMjMyNWU4LWNhZTgtNGY0MS04NmI5LWE1ZjJkYmRhZTE3NyIsImNsaWVudF9pZCI6ImFuZ3VsYXIiLCJzY29wZSI6WyJyZWFkIiwid3JpdGUiXX0.Mi_xC1se02ksW0vqxi6J-C1nqX0pDD1kv-36JstXYL0';
  constructor(private http: Http) { }

  pesquisar(filtro: LancamentoFilter) {
    const headers = new Headers();
    const params = new URLSearchParams();
    // tslint:disable-next-line:max-line-length
    headers.append('Authorization', `${this.toke}` );

    if (filtro.descricao) {
      params.set('descricao', filtro.descricao);
    }
    if (filtro.dataVencimentoInicio) {
      params.set('dataVencimentoDe', moment(filtro.dataVencimentoInicio).format('YYYY-MM-DD') );
    }
    if (filtro.dataVencimentoInicio) {
      params.set('dataVencimentoAte', moment(filtro.dataVencimentoFim).format('YYYY-MM-DD'));
    }

    return this.http.get(`${this.lancamentosUrl}/pesquisar`, { headers, search: params })
    .toPromise()
    .then(response => response.json().content);
  }

  excluir(codigo: number): Promise<void> {
    const headers = new Headers();
     // tslint:disable-next-line:max-line-length
     headers.append('Authorization',  `${this.toke}`);
    return  this.http.delete(`${this.lancamentosUrl}/apagar/${codigo}`, {headers})
    .toPromise()
    .then(() => null);
  }

}
