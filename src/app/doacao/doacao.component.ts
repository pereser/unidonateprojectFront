import { Component, OnInit } from '@angular/core';
import { CadastroOng } from './cadastroong';
import axios from "axios";

@Component({
  selector: 'app-doacao',
  templateUrl: './doacao.component.html',
  styleUrls: ['./doacao.component.css']
})
export class DoacaoComponent implements OnInit {

  cadastros: CadastroOng[] = [];


  constructor() { 
    this.consultaCadastros() ;
  }

  ngOnInit(): void {
  }
  
  consultaCadastros() {
    axios
    .get("http://localhost:8090/unidonate/ongs/1")
    .then(response => {
    console.log(response);
    for (let t of response.data._embedded.cadastros) {
    console.log(t);
    this.cadastros.push(new CadastroOng(t.id, t.nome, t.cnpj , t.endereco, t.telefone, t.email));
    }
    
    })
    .catch(error => {
    console.log(error);
    })
    .finally(() => {});
    }

}
