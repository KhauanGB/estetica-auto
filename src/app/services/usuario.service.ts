import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario.model';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  private usuarios: Usuario[] = [];

  cadastrar(usuario: Usuario): void {
    usuario.id = this.gerarId();
    this.usuarios.push(usuario);
    console.log('Usuário cadastrado:', usuario);
  }

  private gerarId(): number {
    return this.usuarios.length > 0
      ? Math.max(...this.usuarios.map(u => u.id || 0)) + 1
      : 1;
  }

  listar(): Usuario[] {
    return this.usuarios;
  }
}
