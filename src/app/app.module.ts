import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataServices } from './data.services';
import { FormComponent } from './form/form.component';
import { LoginComponent } from './Login/Login.component';
import { PrincipalComponent } from './Principal/Principal.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
      LoginComponent,
      PrincipalComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [DataServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
