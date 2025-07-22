// src/app/componentes/favoritos/favoritos.component.ts
import { Component, OnInit } from '@angular/core';
import { FavoritosService } from '../../services/favoritos.service';
import { Produto } from '../../models/produto.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.css'],
  imports: [CommonModule]
})
export class FavoritosComponent implements OnInit {
  favoritos: Produto[] = [];

  constructor(private favoritosService: FavoritosService) {}

  ngOnInit(): void {
    this.favoritos = this.favoritosService.listar();
  }

  remover(id: number): void {
    this.favoritosService.remover(id);
    this.favoritos = this.favoritosService.listar();
  }
}
