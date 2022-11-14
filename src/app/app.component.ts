import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'propriedades-eventos';

  propertyWord = "Parangaricutirimirruaro"

  eventoRecebido($event: any){
    console.log("fake news recebidas cm sucesso",$event )
  }

 
}
