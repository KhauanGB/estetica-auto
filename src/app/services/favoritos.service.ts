// src/app/services/favoritos.service.ts
import { Injectable } from '@angular/core';
import { Produto } from '../models/produto.model';

@Injectable({
  providedIn: 'root'
})
export class FavoritosService {
  private favoritos: Produto[] = [];

  adicionar(produto: Produto): void {
    const jaExiste = this.favoritos.some(p => p.id === produto.id);
    if (!jaExiste) {
      this.favoritos.push(produto);
    }
  }

  remover(id: number): void {
    this.favoritos = this.favoritos.filter(p => p.id !== id);
  }

  listar(): Produto[] {
    return this.favoritos;
  }
}
