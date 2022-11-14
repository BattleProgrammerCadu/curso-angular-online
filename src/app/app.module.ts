import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataBindingComponent } from './shared/components/data-binding/data-binding.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { ContadorComponent } from './shared/components/contador/contador.component';
import { DiretivasComponent } from './shared/components/diretivas/diretivas.component';
import { ExercicioNgClassComponent } from './shared/components/exercicio-ng-class/exercicio-ng-class.component';
import { ExerciciosPipesComponent } from './shared/components/exercicios-pipes/exercicios-pipes.component';
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
