import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { VerproyectosComponent } from './verproyectos/verproyectos.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    VerproyectosComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
