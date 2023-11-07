import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {CadastroMedicoService} from "./cadastro-medico.service";
import {Medico} from "./medico";

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit{

  formCadastro: FormGroup = this.fb.group({})
  medico: Medico | undefined
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: CadastroMedicoService,
    // private messageService: MessageService,

  ) {
  }
  ngOnInit(): void {
    this.formCadastro = this.fb.group({
      nome: ["",[
        Validators.required,
        Validators.maxLength(60),
        Validators.minLength(2)
      ]],
      cpf: ["",[
        Validators.required,
        Validators.maxLength(11),
        Validators.minLength(11)
      ]],
      crm: ["",[
        Validators.required,
      ]],
      celular: ["",[
        Validators.required,
        Validators.maxLength(11),
        Validators.minLength(11),
      ]],
      email: ["",[
        Validators.required,
        Validators.email,
      ]],
      // email: ["", Validators.required],
      senha: ["",[
        Validators.required,
        Validators.minLength(6)
      ]],
      obs: ["",[
        Validators.required
      ]],
      // confirmSenha: ["", [Validators.required]]
    })

    console.log(this.formCadastro.value)
  }

  cadastrar() {

    const medico: any = {
      nome: this.formCadastro.value.nome,
      cpf: this.formCadastro.value.cpf,
      crm: this.formCadastro.value.crm,
      celular: this.formCadastro.value.celular,
      email: this.formCadastro.value.email,
      senha: this.formCadastro.value.senha,
      obs: this.formCadastro.value.obs,
    }

    if(this.formCadastro.status !== "INVALID") {
      this.service.cadastro(medico).subscribe((res) => {
        if(!res.hasOwnProperty('error')){
          console.log("Usuário cadastrado")
          console.log(medico)
          setTimeout(()=> {
            this.redirecionaHome()
          }, 1000)
        }else{
          console.log("Erro no cadastro do usuário")
          console.log(medico)
        }
      })
    }else {
      console.log("Formulário inválido, verifique os campos e preencha-os corretamente")
      console.log(medico)
    }
  }

  redirecionaHome(){
    this.router.navigate(['home'])
  }

  login(){
    console.log(this.formCadastro.value)
    this.router.navigate(['/', 'cadastro'])
    console.log("Usuário redirecionado para a tela de cadastro")

  }
}

