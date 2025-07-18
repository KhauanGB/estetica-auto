import { Component } from '@angular/core';
import { Usuario } from '../../models/usuario.model';
import { UsuarioService } from '../../services/usuario.service';
import { Router } from '@angular/router';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-usuario',
  templateUrl: './form-usuario.component.html',
  styleUrls: ['./form-usuario.component.css'] ,
  imports: [CommonModule, FormsModule]
})
export class FormUsuarioComponent {
  usuario: Usuario = {
    nome: '',
    email: '',
    senha: ''
  };

  constructor(
    private usuarioService: UsuarioService,
    private router: Router
  ) {}

  salvar() {
    this.usuarioService.cadastrar(this.usuario);
    this.router.navigate(['/']);
  }
}
