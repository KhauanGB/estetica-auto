// src/app/componentes/cadastro-usuario/cadastro-usuario.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-cadastro-usuario',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.css']
})
export class CadastroUsuarioComponent {
  usuario = {
    nome: '',
    email: '',
    senha: ''
  };

  mensagem: string = '';

  constructor(private authService: AuthService) {}

  cadastrar(): void {
    const { nome, email, senha } = this.usuario;

    this.authService.cadastrar(nome, email, senha).subscribe({
      next: () => {
        this.mensagem = 'Usuário cadastrado com sucesso!';
        this.usuario = { nome: '', email: '', senha: '' };
      },
      error: (err) => {
        this.mensagem = err.error?.erro || 'Erro ao cadastrar usuário';
      }
    });
  }
}
