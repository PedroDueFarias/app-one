import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit{
  formCadastro: FormGroup = this.fb.group({})
  constructor(
    private fb: FormBuilder,
    private router: Router,
  ) {
  }
  ngOnInit(): void {
    this.formCadastro = this.fb.group({
      nome: ["", Validators.required],
      cpf: ["", Validators.required],
      email: ["", Validators.required],
      senha: ["", Validators.required],
      confirmSenha: ["", Validators.required],
      crm: ["", Validators.required],
    })

    console.log(this.formCadastro.value)
  }

  cadastrar() {
    if(this.formCadastro.status == "VALID") {
      console.log(this.formCadastro.value)
      this.router.navigate(['/', 'home'])
      console.log("Formulário válido")
    }else {
      console.log("Formulário inválido")
      console.log(this.formCadastro.value)
    }
  }
}
