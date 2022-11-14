import { Component } from '@angular/core';

@Component({
  selector: 'app-exercicio-ng-class',
  templateUrl: './exercicio-ng-class.component.html',
  styleUrls: ['./exercicio-ng-class.component.css']
})
export class ExercicioNgClassComponent {
    deveSerVerde = false;

    tornarVerde(){
      this.deveSerVerde = !this.deveSerVerde;
    }
}
