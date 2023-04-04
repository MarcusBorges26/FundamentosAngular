import { Component } from '@angular/core';

@Component({
  selector: 'app-segundo-componente',
  templateUrl: './segundo-componente.component.html',
  styleUrls: ['./segundo-componente.component.css']
})
export class SegundoComponenteComponent {

  nome = "Marcus"
  dataNascimento = "2001-04-26"
  urlImagem = "/assets/Gato.jpeg"
  
  mostraData(){
    alert('A data de nascimento de Marcus é: ${this.dataNascimento}')
  }
}
