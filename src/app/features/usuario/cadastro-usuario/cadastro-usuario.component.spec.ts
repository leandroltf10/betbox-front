import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzTypographyModule } from 'ng-zorro-antd/typography';

import { CadastroUsuarioComponent } from './cadastro-usuario.component';

describe('CadastroUsuarioComponent', () => {
  let component: CadastroUsuarioComponent;
  let fixture: ComponentFixture<CadastroUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroUsuarioComponent ],
      imports: [
        HttpClientTestingModule,
        FormsModule,
        ReactiveFormsModule,

        NzFormModule,
        NzCardModule,
        NzInputModule,
        NzIconModule,
        NzButtonModule,
        NzTypographyModule,
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deve ser criado', () => {
    expect(component).toBeTruthy();
  });

  it('deve validar a confirmação de senha e imputar erro de confirmação se senha e confirmação estiverem diferentes', () => {
    component.cadastroUsuarioForm = component.montarCadastroUsuarioForm();

    component.cadastroUsuarioForm.controls.senhaUsuario.setValue('abc123');
    component.cadastroUsuarioForm.controls.confirmacaoSenhaUsuario.setValue('abc12');

    expect(component.cadastroUsuarioForm.controls.confirmacaoSenhaUsuario.getError('confirm')).toBeTrue();
  });

  it('deve validar a confirmação de senha e não imputar erros se senha e confirmação estiverem iguais', () => {
    component.cadastroUsuarioForm = component.montarCadastroUsuarioForm();

    component.cadastroUsuarioForm.controls.senhaUsuario.setValue('abc123');
    component.cadastroUsuarioForm.controls.confirmacaoSenhaUsuario.setValue('abc123');

    expect(component.cadastroUsuarioForm.controls.confirmacaoSenhaUsuario.getError('confirm')).toBeNull();
  });

});
