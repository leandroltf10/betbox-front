import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzCardModule } from 'ng-zorro-antd/card';

import { CadastroUsuarioRoutingModule } from './cadastro-usuario-routing.module';

import { CadastroUsuarioComponent } from './cadastro-usuario.component';

@NgModule({
  declarations: [
    CadastroUsuarioComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    NzFormModule,
    NzInputModule,
    NzButtonModule,
    NzIconModule,
    NzTypographyModule,
    NzCardModule,

    CadastroUsuarioRoutingModule
  ]
})
export class CadastroUsuarioModule { }
