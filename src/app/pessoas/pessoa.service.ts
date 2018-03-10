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
  token  = ' Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1MjA3MTExMTUsInVzZXJfbmFtZSI6ImFkbWluQGdtYWlsLmNvbSIsImF1dGhvcml0aWVzIjpbIlJPTEVfQ0FEQVNUUkFSX0NBVEVHT1JJQSIsIlJPTEVfUEVTUVVJU0FSX1BFU1NPQSIsIlJPTEVfUkVNT1ZFUl9QRVNTT0EiLCJST0xFX0NBREFTVFJBUl9MQU5DQU1FTlRPIiwiUk9MRV9QRVNRVUlTQVJfTEFOQ0FNRU5UTyIsIlJPTEVfUkVNT1ZFUl9MQU5DQU1FTlRPIiwiUk9MRV9DQURBU1RSQVJfUEVTU09BIiwiUk9MRV9QRVNRVUlTQVJfQ0FURUdPUklBIl0sImp0aSI6Ijc5NDYxZDAzLTg4NjktNGFlOC04ZTM2LTU3MDY3YTU4OTNkYyIsImNsaWVudF9pZCI6ImFuZ3VsYXIiLCJzY29wZSI6WyJyZWFkIiwid3JpdGUiXX0.9AssDhiMKGrSweFDsUms2ZMpxe11zQIOQHOqM1P6cYY';
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
       .then( response => response.json())
       .catch(erro => this.erroHandle.handle(erro));
   }

   excluir(codigo: number): Promise<void> {
    const headers =  new Headers();
    headers.append('Authorization', `${this.token}`);
    return this.http.delete(`${this.pessoaUrl}/removers/${codigo}`, {headers})
    .toPromise()
    .then(() => null)
    .catch(erro => this.erroHandle.handle(erro));
   }

}
