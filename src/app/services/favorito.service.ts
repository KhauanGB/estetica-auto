import { Injectable } from '@angular/core';
import { Produto } from '../models/produto.model';

@Injectable({
  providedIn: 'root'
})
export class FavoritoService {
  private favoritos: Produto[] = [];

  adicionar(produto: Produto): void {
    if (!this.favoritos.find(p => p.id === produto.id)) {
      this.favoritos.push(produto);
    }
  }

  remover(id: number): void {
    this.favoritos = this.favoritos.filter(p => p.id !== id);
  }

  listar(): Produto[] {
    return this.favoritos;
  }

  estaNosFavoritos(id: number): boolean {
    return this.favoritos.some(p => p.id === id);
  }
}
