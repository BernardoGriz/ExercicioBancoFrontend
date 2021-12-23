import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {

  url = 'http://localhost:3000/banco/'

  constructor(private http: HttpClient) { }

  getTransferencia(){

    return this.http.get(this.url)
  }

  getUmaTransferencia(id:any){
    return this.http.get(this.url+ '/' + id)
  }

  addTransferencia(transferencia:Transferencia){
    return this.http.post(this.url, transferencia)

  }

  deleteTransferencia(id:any){
    return this.http.delete(this.url + '/' + id)
  }

  editTransferencia(id:any, transferencia:Transferencia){
    return this.http.put(this.url + '/' + id, transferencia)
  }
}
export interface Transferencia{
  id_transferencia?:string
  nomeCliente?:string
  valor?:string
  contaCliente?:string
}
