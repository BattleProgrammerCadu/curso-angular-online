import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { HeaderComponent } from './header/header.component';
import { ContadorComponent } from './contador/contador.component';
import { DiretivasComponent } from './diretivas/diretivas.component';
import { ExercicioNgClassComponent } from './exercicio-ng-class/exercicio-ng-class.component';
import { ExerciciosPipesComponent } from './exercicios-pipes/exercicios-pipes.component';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';

registerLocaleData(localePt,'pt');

@NgModule({
  declarations: [
    AppComponent,
    DataBindingComponent,
    HeaderComponent,
    ContadorComponent,
    DiretivasComponent,
    ExercicioNgClassComponent,
    ExerciciosPipesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [{
    provide: LOCALE_ID,
    useValue: 'pt'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
