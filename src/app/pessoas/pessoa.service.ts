import { Http , Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class PessoaService {
  pessoaUrl = 'http://localhost:8080/pessoa/listar';
  constructor(private http: Http) { }

  pesquisar() {
   const headers = new Headers();
   // tslint:disable-next-line:max-line-length
      headers.append('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1MTk3ODQ2NzEsInVzZXJfbmFtZSI6ImFkbWluQGdtYWlsLmNvbSIsImF1dGhvcml0aWVzIjpbIlJPTEVfQ0FEQVNUUkFSX0NBVEVHT1JJQSIsIlJPTEVfUEVTUVVJU0FSX1BFU1NPQSIsIlJPTEVfUkVNT1ZFUl9QRVNTT0EiLCJST0xFX0NBREFTVFJBUl9MQU5DQU1FTlRPIiwiUk9MRV9QRVNRVUlTQVJfTEFOQ0FNRU5UTyIsIlJPTEVfUkVNT1ZFUl9MQU5DQU1FTlRPIiwiUk9MRV9DQURBU1RSQVJfUEVTU09BIiwiUk9MRV9QRVNRVUlTQVJfQ0FURUdPUklBIl0sImp0aSI6IjY0ZDAxZmM3LTVhMzYtNDBmMi04YTYxLTFkYmRlNzIzM2I4ZiIsImNsaWVudF9pZCI6ImFuZ3VsYXIiLCJzY29wZSI6WyJyZWFkIiwid3JpdGUiXX0.XebkjZIes7SUSiMbnHoCqHGAXGdpT2UKpqjE7stYgkg');
      return this.http.get(`${this.pessoaUrl}`, { headers })
      .toPromise()
      .then( response => response.json());
  }



}
