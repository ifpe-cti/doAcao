import { Injectable } from '@angular/core';

import { Message } from 'primeng/components/common/api';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  msgs: Message[] = [];

  constructor() { }

  showSuccessLogin() {
    this.msgs = [];
    this.msgs.push({ severity: 'success', summary: 'Login efetuado com sucesso' });
  }

  showErrorLogin() {
    this.msgs = [];
    this.msgs.push({ severity: 'error', summary: 'User ou senha incorretos', detail: 'Os dados digitados não estão cadastrados no banco de dados ou não condizem' });
  }

  showErrorCadastro() {
    this.msgs = [];
    this.msgs.push({ severity: 'error', summary: 'Alguns campos não foram preenchidos corretamente'});
  }

  showSuccessCadastro() {
    this.msgs = [];
    this.msgs.push({ severity: 'success', summary: 'Cadastro efetuado com sucesso' });
  }

}
