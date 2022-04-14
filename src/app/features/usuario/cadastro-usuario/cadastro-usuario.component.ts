import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'betbox-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.css']
})
export class CadastroUsuarioComponent implements OnInit {

  cadastroUsuarioForm!: FormGroup;
  senhaVisivel = false;
  confirmacaoSenhaVisivel = false;
  patternEmail = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
  patternSenha = /^(?=.*[0-9])(?=.*[a-z]).{6,15}$/;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.cadastroUsuarioForm = this.montarCadastroUsuarioForm();
  }

  montarCadastroUsuarioForm(): FormGroup {
    return this.formBuilder.group(
      {
        nomeUsuario: [null, [Validators.required]],
        emailUsuario: [null, [Validators.required, Validators.pattern(this.patternEmail)]],
        senhaUsuario: [null, [Validators.required, Validators.pattern(this.patternSenha)]],
        confirmacaoSenhaUsuario: [null, [Validators.required, this.validarConfirmacaoSenha]]
      }
    );
  }

  atualizarValidacaoConfirmacaoSenha(): void {
    Promise.resolve().then(() => this.cadastroUsuarioForm.controls.confirmacaoSenhaUsuario.updateValueAndValidity());
  }

  validarConfirmacaoSenha = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { required: true };
    } else if (control.value !== this.cadastroUsuarioForm.controls.senhaUsuario.value) {
      return { confirm: true, error: true };
    }
    return {};
  };

  cadastrar(): void {
  }

}
