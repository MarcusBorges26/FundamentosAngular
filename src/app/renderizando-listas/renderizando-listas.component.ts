import { Component } from '@angular/core';
import { celular } from '../Types/celular';

@Component({
  selector: 'app-renderizando-listas',
  templateUrl: './renderizando-listas.component.html',
  styleUrls: ['./renderizando-listas.component.css']
})
export class RenderizandoListasComponent {
  celulares: celular[] = [
    {id: 1, nome: "Iphone 11", descricao: "Um novo lançamento da marca Apple do ano de 2020", esgotado: false},
    {id: 2, nome: "Iphone 12", descricao: "Um novo lançamento da marca Appler do ano de 2021, que trouxe um novo design inovador, revolcionando a industria da telefonia mundial.",esgotado: true},
    {id: 3, nome: "Iphone 13", descricao: "Um novo lançamento da marca Apple do ano de 2022", esgotado: false}
  ]
}
