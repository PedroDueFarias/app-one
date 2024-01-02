import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSlideToggleModule} from "@angular/material/slide-toggle";

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from './telas/login/login.component';
import {CadastroComponent} from './telas/cadastro/cadastro.component';
import {PasswordModule} from "primeng/password";
import {InputTextModule} from "primeng/inputtext";
import {ApresentacaoComponent} from "./telas/apresentacao/apresentacao.component";
import {InputTextareaModule} from "primeng/inputtextarea";
import {ButtonModule} from "primeng/button";
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatChipsModule} from "@angular/material/chips";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatLegacyChipsModule} from "@angular/material/legacy-chips";

@NgModule({
  declarations: [
    AppComponent,
    ApresentacaoComponent,
    LoginComponent,
    CadastroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    PasswordModule,
    InputTextModule,
    InputTextareaModule,
    ButtonModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatChipsModule,
    MatGridListModule,
    MatLegacyChipsModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
