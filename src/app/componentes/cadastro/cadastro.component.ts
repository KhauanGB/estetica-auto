import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {
  usuario = {
    nome: '',
    email: '',
    senha: ''
  };

  cadastrar() {
    console.log('Usuário cadastrado:', this.usuario);
    // Aqui pode ser feito o envio para um serviço ou API futuramente
  }
}
