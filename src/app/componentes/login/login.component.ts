// src/app/componentes/login/login.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  standalone: true,
  imports: [ CommonModule, FormsModule]
})
export class LoginComponent {
  email = '';
  senha = '';
  erro = '';

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    this.authService.login(this.email, this.senha).subscribe({
      next: (res) => {
        console.log('Login com sucesso:', res);
        localStorage.setItem('usuario', JSON.stringify(res));
        this.router.navigate(['/']);
      },
      error: (err) => {
        console.error(err);
        this.erro = 'Email ou senha inválidos';
      }
    });
  }
}
