import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent{

  @Input() valor = 0;
  @Output() valorChange = new EventEmitter();


  incrementar(){
    this.valor = this.valor + 1
    this.valorChange.emit(this.valor)
  }
  decrementar(){
    this.valor = this.valor - 1
    this.valorChange.emit(this.valor)
  }
}
