// src/app/componentes/login/login.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../..//services/auth.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  standalone: true,
  imports: [FormsModule, CommonModule]
})
export class LoginComponent {
  email = '';
  senha = '';
  erro = '';

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    if (this.authService.login(this.email, this.senha)) {
      this.router.navigate(['/produtos']);
    } else {
      this.erro = 'Email ou senha inválidos.';
    }
  }
}
