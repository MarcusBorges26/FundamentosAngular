import { Component } from '@angular/core';
import { LoggerService } from '../logger.service';

@Component({
  selector: 'app-exemplo-servicos',
  templateUrl: './exemplo-servicos.component.html',
  styleUrls: ['./exemplo-servicos.component.css']
})
export class ExemploServicosComponent {
  nome =""
  

  constructor(private logger: LoggerService){
    
  }

  adicionarNome(){
    this.logger.logar('O nome ${this.nome} foi adicionado')
  }
}
