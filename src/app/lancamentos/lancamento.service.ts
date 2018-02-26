import { Injectable } from '@angular/core';
import { Http , Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { URLSearchParams } from '@angular/http';

export interface LancamentoFilter {
  descricao: String;
  dataVencimentoInicio: Date;
  dataVencimentoFim: Date;
}

@Injectable()
export class LancamentoService {
  lancamentosUrl = 'http://localhost:8080/lancamento';
  constructor(private http: Http) { }

  pesquisar(filter: LancamentoFilter) {
    const headers = new Headers();
    const params = new URLSearchParams();
    // tslint:disable-next-line:max-line-length
    headers.append('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1MTk2MDkxMjMsInVzZXJfbmFtZSI6ImFkbWluQGdtYWlsLmNvbSIsImF1dGhvcml0aWVzIjpbIlJPTEVfQ0FEQVNUUkFSX0NBVEVHT1JJQSIsIlJPTEVfUEVTUVVJU0FSX1BFU1NPQSIsIlJPTEVfUkVNT1ZFUl9QRVNTT0EiLCJST0xFX0NBREFTVFJBUl9MQU5DQU1FTlRPIiwiUk9MRV9QRVNRVUlTQVJfTEFOQ0FNRU5UTyIsIlJPTEVfUkVNT1ZFUl9MQU5DQU1FTlRPIiwiUk9MRV9DQURBU1RSQVJfUEVTU09BIiwiUk9MRV9QRVNRVUlTQVJfQ0FURUdPUklBIl0sImp0aSI6ImJiOTgyM2ExLTAyZDQtNDAyYi1hNDQ2LWIwNmFhNmE3NzYwNiIsImNsaWVudF9pZCI6ImFuZ3VsYXIiLCJzY29wZSI6WyJyZWFkIiwid3JpdGUiXX0.4OVpRyRLyTz5XkAOyF1as-AbUHxO6bFNH8GEfIB286Y');
    console.log(filter.descricao);
    if (filter.descricao) {
      params.set('descricao', filter.descricao );
    }
    if (filter.dataVencimentoInicio) {
      params.set('dataVencimentoDe', filter.dataVencimentoInicio );
    }
    if (filter.dataVencimentoInicio) {
      params.set('dataVencimentoAte', filter.dataVencimentoInicio );
    }
    return this.http.get(`${this.lancamentosUrl}/pesquisar`, { headers, search: params })
    .toPromise()
    .then(response => response.json().content);
  }

}
