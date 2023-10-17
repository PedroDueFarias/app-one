import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  formLogin: FormGroup = this.fb.group({})
  constructor(
    private fb: FormBuilder,
    private router: Router,
  ) {
  }
  ngOnInit(): void {
    this.formLogin = this.fb.group({
      email: ["", Validators.required],
      senha: ["", Validators.required],
    })
  }

  entrar() {
    if(this.formLogin.status == "VALID") {
      console.log(this.formLogin.value)
      this.router.navigate(['/', 'home'])
      console.log("Formulário válido")
    }else {
      console.log("Formulário inválido")
      console.log(this.formLogin.value)
    }
  }

  cadastrar() {
    if(this.formLogin.status == 'INVALID') {
      console.log(this.formLogin.value)
      this.router.navigate(['/', 'cadastro'])
      console.log("Usuário foi para a tela de cadastro")
    }
  }
}
