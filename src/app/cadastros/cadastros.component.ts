import { Component, OnInit } from '@angular/core';
import { UserService } from './cadastros.user.service';
import { UsuarioCreate, OngCreate} from './user.module';

@Component({
  selector: 'app-cadastros',
  templateUrl: './cadastros.component.html',
  styleUrls: ['./cadastros.component.css']
})
export class CadastrosComponent implements OnInit {

  request: UsuarioCreate = {
    telefone: null,
    nome: '',
    email: '',
    senha: '',
    cpf: null
  }

  request2 : OngCreate = {
    nome: '',
    cnpj: null,
    endereco: null,
    telefone: null,
    email: ''
  }

  

  constructor(private userService: UserService) { }

  ngOnInit() {
 
  }

  save(){
    this.userService.createUser(this.request).subscribe(
    )
  }
  save2(){
    this.userService.createOng(this.request2).subscribe()
  }



}
