// src/app/services/auth.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly storageKey = 'usuarioLogado';

  login(email: string, senha: string): boolean {
    const usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]');
    const usuario = usuarios.find((u: any) => u.email === email && u.senha === senha);

    if (usuario) {
      localStorage.setItem(this.storageKey, JSON.stringify(usuario));
      return true;
    }
    return false;
  }

  cadastrar(nome: string, email: string, senha: string): boolean {
    const usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]');
    if (usuarios.some((u: any) => u.email === email)) return false;

    usuarios.push({ nome, email, senha });
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
    return true;
  }

  logout() {
    localStorage.removeItem(this.storageKey);
  }

  isLogado(): boolean {
    return !!localStorage.getItem(this.storageKey);
  }

  getUsuarioLogado(): any {
    return JSON.parse(localStorage.getItem(this.storageKey) || 'null');
  }
}
