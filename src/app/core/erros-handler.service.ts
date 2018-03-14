import { ToastyService } from 'ng2-toasty';
import { Injectable } from '@angular/core';

@Injectable()
export class ErrosHandlerService {

  constructor(
    private toastyService: ToastyService
  ) {}

  handle(erroResponse: any) {
    let msg: string;
    if ( typeof erroResponse === 'string') {
      msg = erroResponse;
    } else if (erroResponse instanceof Response
      && erroResponse.status >= 400
      && erroResponse.status <= 499 ) {
        let erros;
       msg = 'Erro ao processar serviço remoto favor procure o administrador do sistema';
        try {
          erros = erroResponse.json();
          console.log(erros, '--');
          msg = erroResponse.body[1].msgUsuario;

        } catch (e) { }
        console.error('Ocorreu um erro', erroResponse);
    } else {
      msg = 'Erro ao processar serviço remoto favor procure o administrador do sistema';
      console.log('Ocorreu um erro', erroResponse);
    }
    this.toastyService.error(msg);
  }

}
