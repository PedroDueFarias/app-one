import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ApresentacaoComponent} from "./telas/apresentacao/apresentacao.component";
import {LoginComponent} from "./telas/login/login.component";
import {CadastroComponent} from "./telas/cadastro/cadastro.component";
import {CommonModule} from "@angular/common";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: "full"
  },

  {
    path: 'home',
    component: ApresentacaoComponent
  },

  {
    path: 'login',
    component: LoginComponent
  },

  {
    path: 'cadastro',
    component: CadastroComponent
  }

];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
