import { Component, OnInit } from '@angular/core';
import { DonateCreate } from './doar.module'
import { UserService } from './cadastro.doar.service';

@Component({
  selector: 'app-doar',
  templateUrl: './doar.component.html',
  styleUrls: ['./doar.component.css']
})
export class DoarComponent implements OnInit {
  
  request3 : DonateCreate = {
    donateType: '',
    qtd: null,
    descricao: '',
    ong: ''
  }


  constructor(private userService: UserService) { 
    

  }

  ngOnInit(): void {
  }

  save3(){
    this.userService.createDonate(this.request3).subscribe()
  }

}
