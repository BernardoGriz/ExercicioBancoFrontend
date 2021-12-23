import {TransferenciaService, Transferencia } from './../../servicos/transferencia.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  ListarTransferencia: Transferencia[]

  constructor(private transferenciaService: TransferenciaService, private router:Router) {
    this.ListarTransferencia = []
  }

  ngOnInit(): void {
    this.listarTransferencias()
  }

  listarTransferencias(){
    this.transferenciaService.getTransferencia().subscribe({
      next: (resultado) => this.ListarTransferencia = <any>resultado,
      error: (erro) => console.error(erro),
      complete: () => console.info('Feito!')
    })
  }
  excluir(id:any){
    this.transferenciaService.deleteTransferencia(id).subscribe({
      next: (resultado) => this.listarTransferencias(),
      error: (erro) => console.error(erro),
      complete: () => console.info ("Exclusão realizada")
    })
  }
  editar(id:any){
    this.router.navigate(['/edit' + '/' + id])
  }
}
