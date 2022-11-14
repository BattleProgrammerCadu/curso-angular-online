import { Component } from '@angular/core';
import { MEMES_AGRUPADOS_POR_CATEGORIA } from 'dados-do-exercicio';



@Component({
  selector: 'app-diretivas',
  templateUrl: './diretivas.component.html',
  styleUrls: ['./diretivas.component.css']
})
export class DiretivasComponent  {

  deveExibir = false;
  listaFrutas = ['maça','laranja', 'mamao', 'kiwi', 'uva'];
  listaCarros = [{
    placa: 'JND-7438',
    cor: 'preto'
  },
  {
    placa: 'YHF-3971',
    cor: 'azul'
  }
]
memes = MEMES_AGRUPADOS_POR_CATEGORIA;
PREFIXO_URL = 'https://raw.githubusercontent.com/vitorfgsantos/angular-memes-diretivas/master/images';
  trocarValor(){
    this.deveExibir = !this.deveExibir;
  }
  soma(a: Number,b: Number){
    return Number(a) + Number(b)
  }
}
