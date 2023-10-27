import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {CadastroMedicoService} from "./cadastro-medico.service";

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit{

  formCadastro: FormGroup = this.fb.group({})
  medico: any
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: CadastroMedicoService,
  ) {
  }
  ngOnInit(): void {
    this.formCadastro = this.fb.group({
      nome: ["",
        Validators.required,
        Validators.maxLength(60),
        Validators.minLength(2)
      ],
      cpf: ["",
        Validators.required,
        Validators.maxLength(11),
        Validators.minLength(11)
      ],
      crm: ["",
        Validators.required,
        Validators.min(6),
        Validators.max(6)
      ],
      // email: ["", Validators.required],
      senha: ["",
        Validators.required,
        Validators.minLength(6)
      ],
      confirmSenha: ["", Validators.required]
    })

    console.log(this.formCadastro.value)
  }

  cadastrar() {

    const medico = {
      nome: this.formCadastro.value.nome,
      cpf: this.formCadastro.value.cpf,
      crm: this.formCadastro.value.crm,
      senha: this.formCadastro.value.senha,
      confirmSenha: this.formCadastro.value.confirmSenha
    }

    if(this.formCadastro.value.senha != this.formCadastro.value.confirmSenha) {
      this.formCadastro.status == "INVALID"
    }

    if(this.formCadastro.status !== "INVALID") {
      console.log(this.formCadastro.value)
      this.router.navigate(['/', 'home'])
      console.log("Usuário cadastrado")
    }else {
      console.log("Formulário inválido")
      console.log(this.formCadastro.value)
    }
  }

  login() {
    if(this.formCadastro.status !== "VALID") {
      this.router.navigate(['/', 'login'])
      console.log("Usuário encaminhado para a tela de login")
    }
  }
}
