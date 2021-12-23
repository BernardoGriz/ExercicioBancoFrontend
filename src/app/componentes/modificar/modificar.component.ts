import { Transferencia, TransferenciaService } from './../../servicos/transferencia.service';
import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.css']
})
export class ModificarComponent implements OnInit {

  transferencia:Transferencia ={
    id_transferencia:'',
    nomeCliente:'',
    contaCliente:'',
    valor:''
  }

  constructor(private transferenciaService:TransferenciaService, private router:Router, private activateRoute:ActivatedRoute) {

  }

  ngOnInit(): void {

    const id_entrada = <any>this.activateRoute.snapshot.params['id']
    this.transferenciaService.getUmaTransferencia(id_entrada).subscribe({
      next: (resultado) => {this.transferencia = resultado;
      console.log(this.transferencia)},
      error: (erro) => console.error(erro),
      complete: () => console.info("Transferência encontrada")
    })

  }

  modificar(){
    this.transferenciaService.editTransferencia(this.transferencia.id_transferencia,this.transferencia).subscribe({
      next: (resultado) => console.log("Editado com sucesso"),
      error: (erro) => console.error(erro),
      complete: () => {console.info("Edição realizada com sucesso")
      this.router.navigate(['/inicio'])
    }
    })

  }

}
