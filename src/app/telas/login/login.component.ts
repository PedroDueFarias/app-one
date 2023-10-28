import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {LoginService} from "./login.service";
import {Medico} from "./medico";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formLogin: FormGroup = this.fb.group({})
  medico: Medico | undefined;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: LoginService,
  ) {
  }

  ngOnInit(): void {
    this.formLogin = this.fb.group({
      crm: ["", Validators.required],
      senha: ["", Validators.required],
    })
  }

  entrar() {

    const medico = {
      crm: this.formLogin.value.crm,
      senha: this.formLogin.value.senha
    }
    if (this.formLogin.status !== "INVALID") {
      this.service.login(medico).subscribe((res) => {
          if (!res.hasOwnProperty('error')) {
            console.log('Usuário logado')
            console.log('medico')
            setTimeout(()=> {
              this.redirecionaHome()}, 1000)
          }else {
            console.log('Erro no login, usuário não cadastrado')
          }
        }
      )
    }
  }

  cadastrar() {
    if (this.formLogin.status == 'INVALID') {
      console.log(this.formLogin.value)
      this.router.navigate(['/', 'cadastro'])
      console.log("Usuário foi para a tela de cadastro")
    }
  }

  redirecionaHome(){
    this.router.navigate(['home'])
  }
}
