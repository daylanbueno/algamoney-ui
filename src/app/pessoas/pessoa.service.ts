import { Http , Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { URLSearchParams } from '@angular/http';
import { ToastyService } from 'ng2-toasty';
import { ErrosHandlerService } from '../core/erros-handler.service';

@Injectable()
export class PessoaService {
  pessoaUrl = 'http://localhost:8080/pessoa';
  // tslint:disable-next-line:max-line-length
  token  = ' Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1MjA3MTYwMTgsInVzZXJfbmFtZSI6ImFkbWluQGdtYWlsLmNvbSIsImF1dGhvcml0aWVzIjpbIlJPTEVfQ0FEQVNUUkFSX0NBVEVHT1JJQSIsIlJPTEVfUEVTUVVJU0FSX1BFU1NPQSIsIlJPTEVfUkVNT1ZFUl9QRVNTT0EiLCJST0xFX0NBREFTVFJBUl9MQU5DQU1FTlRPIiwiUk9MRV9QRVNRVUlTQVJfTEFOQ0FNRU5UTyIsIlJPTEVfUkVNT1ZFUl9MQU5DQU1FTlRPIiwiUk9MRV9DQURBU1RSQVJfUEVTU09BIiwiUk9MRV9QRVNRVUlTQVJfQ0FURUdPUklBIl0sImp0aSI6ImM5MDlmZGJmLWFlN2YtNGFmMS1hN2M2LWM5ZjMxOWFhYTQ3MCIsImNsaWVudF9pZCI6ImFuZ3VsYXIiLCJzY29wZSI6WyJyZWFkIiwid3JpdGUiXX0.3aUPf5ggtwoFz3R0pNxGrsxlpEkXUmdctGwy8jJc9CM';
   constructor(
    private http: Http,
    private erroHandle: ErrosHandlerService,
    private toastService: ToastyService
  ) { }

  pesquisar(nome: string) {
      const headers = new Headers();
      const params = new URLSearchParams();
      params.set('nome', nome);
    // tslint:disable-next-line:max-line-length
       headers.append('Authorization', `${this.token}`);
       return this.http.get(`${this.pessoaUrl}/pesquisar`, { headers, search: params })
       .toPromise()
       .then( response => response.json());
   }

   excluir(codigo: number): Promise<void> {
    const headers =  new Headers();
    headers.append('Authorization', `${this.token}`);
    console.log('Código', codigo);
    return this.http.delete(`${this.pessoaUrl}/apagar/${codigo}`, {headers})
    .toPromise()
    .then(() => null);
   }

}
