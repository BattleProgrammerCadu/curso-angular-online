import { DecimalPipe } from '@angular/common';
import { Component,  } from '@angular/core';

@Component({
  selector: 'app-exercicios-pipes',
  templateUrl: './exercicios-pipes.component.html',
  styleUrls: ['./exercicios-pipes.component.css'],
  providers: [
    DecimalPipe,
  ]
})
export class ExerciciosPipesComponent  {

  constructor(
    private decimalPipe: DecimalPipe
  ){}

  filme = {
    titulo: 'Senhor do Aneis - A sociedade do anel',
    estrelas: 4.454545687,
    precoAluguel: 15.45,
    dataLancamento: new Date(2002, 0, 1)
  };

  compras = [{
    produto:'lâmpadas',
    valor: 299.29,
    quantidade: 2,
    peso: 0,
    data: new Date(2020,1,1,15,20)
  },
  {
    produto: 'farinha',
    valor: 450.29,
    quantidade: 2,
    peso: 29.33333,
    data: new Date(2020,1,1,19,30)
  }]

  getPesoFormatado(peso: number){
    if(peso<=0){
      return 'sem peso'
    }
    return this.decimalPipe.transform(peso, '1.1-2') + ' Kg';
  }

}
