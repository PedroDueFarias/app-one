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

  formCadastroMedico: FormGroup = this.fb.group({})
  // medico: Medico | undefined

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: CadastroMedicoService,
    // private messageService: MessageService,

  ) {
  }
  ngOnInit(): void {
    this.formCadastroMedico = this.fb.group({
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
      sexo: ["", [
        Validators.required
      ]],
      nascimento: ["",[
        Validators.required
      ]],
      email: ["",[
        Validators.required,
        Validators.email,
      ]],
      senha: ["",[
        Validators.required,
        Validators.minLength(6)
      ]],
      obs: ["",[
        Validators.required
      ]],
      confirmSenha: ["", [
        Validators.required
      ]],
      cep: ["",[
        Validators.required
      ]],
      estado: ["",[
        Validators.required
      ]],
      endereco: ["",[
        Validators.required
      ]],
    })

    console.log(this.formCadastroMedico.value)
  }

  cadastrar() {

    const medico: Medico = {
      nome: this.formCadastroMedico.value.nome,
      cpf: this.formCadastroMedico.value.cpf,
      crm: this.formCadastroMedico.value.crm,
      celular: this.formCadastroMedico.value.celular,
      sexo: this.formCadastroMedico.value.sexo,
      email: this.formCadastroMedico.value.email,
      senha: this.formCadastroMedico.value.senha,
      confirmeSenha: this.formCadastroMedico.value.confirmSenha,
      obs: this.formCadastroMedico.value.obs,
      cep: this.formCadastroMedico.value.cep,
      estado: this.formCadastroMedico.value.estado,
      endereco: this.formCadastroMedico.value.endereco,
  }

    //AJEITAR LÓGICA DE CONFIRMAÇÃO DE SENHA
    // if(medico.confirmeSenha.value !== medico.senha.value){
    //   this.formCadastro.invalid
    // }

    if(this.formCadastroMedico.status !== "INVALID") {
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
    console.log(this.formCadastroMedico.value)
    this.router.navigate(['/', 'login'])
    console.log("Usuário redirecionado para a tela de cadastro")

  }
}

