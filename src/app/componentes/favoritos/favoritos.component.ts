import { Component, OnInit } from '@angular/core';
import { FavoritoService } from '../../services/favorito.service';
import { Produto } from '../../models/produto.model';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.css'] ,
  imports: [CommonModule, FormsModule]
})
export class FavoritosComponent implements OnInit {
  favoritos: Produto[] = [];

  constructor(private favoritoService: FavoritoService) {}

  ngOnInit(): void {
    this.favoritos = this.favoritoService.listar();
  }

  remover(id: number): void {
    this.favoritoService.remover(id);
    this.favoritos = this.favoritoService.listar();
  }
}
