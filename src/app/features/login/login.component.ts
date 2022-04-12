import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'betbox-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  senhaVisivel = false;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.loginForm = this.montarLoginForm();
  }

  montarLoginForm(): FormGroup {
    return this.formBuilder.group(
      {
        emailUsuario: null,
        senhaUsuario: null
      }
    );
  }

  login(): void {
  }

}
