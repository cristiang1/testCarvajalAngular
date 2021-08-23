import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { LoginComponent } from './Login/Login.component';
import { PrincipalComponent } from './Principal/Principal.component';

const routes: Routes = [
  {path:'', component:PrincipalComponent},
  {path:'guardar', component:FormComponent},
  {path:'login', component:LoginComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
