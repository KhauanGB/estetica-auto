// src/app/services/carrinho.service.ts
import { Injectable } from '@angular/core';
import { Produto } from '../models/produto.model';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {
  private carrinho: Produto[] = [];

  adicionar(produto: Produto): void {
    this.carrinho.push(produto);
  }

  remover(index: number): void {
    this.carrinho.splice(index, 1);
  }

  listar(): Produto[] {
    return this.carrinho;
  }

  limpar(): void {
    this.carrinho = [];
  }

  get total(): number {
    return this.carrinho.reduce((soma, item) => soma + item.preco, 0);
  }
}
