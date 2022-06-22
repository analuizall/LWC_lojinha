import { LightningElement } from "lwc";

export default class App extends LightningElement {
  
  // Definir qual vai ser a cor mostrada por padrão
  
  isMochilaPreto = false;
  isMochilaMarrom = true;
  isMochilaVermelha = false;
  // 3 funções ( violaoEhPreto, violaoEhMarrom, violaoEhRoxo)
  mochilaPreto(){
    this.isMochilaPreto = true;
    this.isMochilaMarrom = false;
    this.isMochilaVermelha = false;

  }

  mochilaMarrom(){
    this.isMochilaPreto = false;
    this.isMochilaMarrom = true;
    this.isMochilaVermelha = false;

  }

  mochilaVermelha(){
    this.isMochilaPreto = false;
    this.isMochilaMarrom = false;
    this.isMochilaVermelha = true;

  }

}
