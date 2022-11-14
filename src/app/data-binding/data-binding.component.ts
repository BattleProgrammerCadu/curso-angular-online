import { Component, Input, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  @Input() palavra: string | undefined;
  @Output() clicado = new EventEmitter();

  initialValue = "teste";
  accessibilityText = "Texo acessivel";
  imageUrl = "https://i.scdn.co/image/ab6761610000e5eb9319d939accc1f1e22155955";
  isDisabled = true;
  valorAtual = 10;

  getImageUrl(){ 
    return  this.imageUrl;
  }

  onClick(){
    console.log("clicou");
  }
  digitouAlgo($event: any){
    this.initialValue = $event.target.value;
  }
  onClickEmitter($event: any){
    console.log('Enviando fake news')
    this.clicado.emit(true);
  }


  constructor() { 
    setTimeout(()=>{
      this.isDisabled = false;
    },3000 )
  }

  ngOnInit(): void {
  }

  

}
