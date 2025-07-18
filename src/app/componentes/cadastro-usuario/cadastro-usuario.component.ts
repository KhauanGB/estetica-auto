import { Component } from '@angular/core';
import { Usuario } from '../../models/usuario.model';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  imports: [CommonModule, FormsModule],
  styleUrls: ['./cadastro-usuario.component.css']
})
export class CadastroUsuarioComponent {
  usuario: Usuario = { id: 0, nome: '', email: '', senha: '' };
  mensagem: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  cadastrar(): void {
    const sucesso = this.authService.cadastrar(
      this.usuario.email,
      this.usuario.nome,
      this.usuario.senha
    );
    if (sucesso) {
      this.mensagem = 'Usuário cadastrado com sucesso!';
      this.router.navigate(['/login']);
    } else {
      this.mensagem = 'E-mail já cadastrado!';
    }
  }
}
