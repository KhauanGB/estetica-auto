// src/app/componentes/login/login.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  usuario = {
    email: '',
    senha: ''
  };

  mensagem: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  login(): void {
    const { email, senha } = this.usuario;

    this.authService.login(email, senha).subscribe({
      next: (res) => {
        console.log('Login bem-sucedido:', res);
        this.mensagem = '';
        this.router.navigate(['/home']);
      },
      error: (err) => {
        this.mensagem = err.error?.erro || 'Erro ao fazer login';
      }
    });
  }
}
