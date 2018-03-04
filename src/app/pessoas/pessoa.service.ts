import { Http , Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { URLSearchParams } from '@angular/http';

@Injectable()
export class PessoaService {
  pessoaUrl = 'http://localhost:8080/pessoa';
  constructor(private http: Http) { }

  listar() {
   const headers = new Headers();

   // tslint:disable-next-line:max-line-length
      headers.append('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1MjAxMzQyMzcsInVzZXJfbmFtZSI6ImFkbWluQGdtYWlsLmNvbSIsImF1dGhvcml0aWVzIjpbIlJPTEVfQ0FEQVNUUkFSX0NBVEVHT1JJQSIsIlJPTEVfUEVTUVVJU0FSX1BFU1NPQSIsIlJPTEVfUkVNT1ZFUl9QRVNTT0EiLCJST0xFX0NBREFTVFJBUl9MQU5DQU1FTlRPIiwiUk9MRV9QRVNRVUlTQVJfTEFOQ0FNRU5UTyIsIlJPTEVfUkVNT1ZFUl9MQU5DQU1FTlRPIiwiUk9MRV9DQURBU1RSQVJfUEVTU09BIiwiUk9MRV9QRVNRVUlTQVJfQ0FURUdPUklBIl0sImp0aSI6ImY5NjVmOGVmLTUzNzEtNDE4Yy04YTdlLTQ2OTAxZDZmNGRhMyIsImNsaWVudF9pZCI6ImFuZ3VsYXIiLCJzY29wZSI6WyJyZWFkIiwid3JpdGUiXX0.apWKF12dU_TxynuIKpIqYDC4ucAe10q8ZNfQw8pQ7Xk');
      return this.http.get(`${this.pessoaUrl}/listar`, { headers })
      .toPromise()
      .then( response => response.json());
  }



  pesquisar(nome: string) {
      const headers = new Headers();
      const params = new URLSearchParams();
      params.set('nome', nome);
      console.log('Pessoa servico ', nome);
    // tslint:disable-next-line:max-line-length
       headers.append('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1MjAxMzUxMDcsInVzZXJfbmFtZSI6ImFkbWluQGdtYWlsLmNvbSIsImF1dGhvcml0aWVzIjpbIlJPTEVfQ0FEQVNUUkFSX0NBVEVHT1JJQSIsIlJPTEVfUEVTUVVJU0FSX1BFU1NPQSIsIlJPTEVfUkVNT1ZFUl9QRVNTT0EiLCJST0xFX0NBREFTVFJBUl9MQU5DQU1FTlRPIiwiUk9MRV9QRVNRVUlTQVJfTEFOQ0FNRU5UTyIsIlJPTEVfUkVNT1ZFUl9MQU5DQU1FTlRPIiwiUk9MRV9DQURBU1RSQVJfUEVTU09BIiwiUk9MRV9QRVNRVUlTQVJfQ0FURUdPUklBIl0sImp0aSI6IjlhMjM2NmRjLTgxOGItNGE5Zi1hMmQwLWE2ZTg3ODIxY2FjYiIsImNsaWVudF9pZCI6ImFuZ3VsYXIiLCJzY29wZSI6WyJyZWFkIiwid3JpdGUiXX0.1IKXVxlS26iRYyG43RThvJjo5ndYXSriUKFH6XzURq4');
       return this.http.get(`${this.pessoaUrl}/pesquisar`, { headers, search: params })
       .toPromise()
       .then( response => response.json());
   }



}
