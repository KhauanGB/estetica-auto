import { Injectable } from '@angular/core';
import { Produto } from '../models/produto.model';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {
  private itens: Produto[] = [];

  adicionar(produto: Produto): void {
    this.itens.push(produto);
  }

  remover(index: number): void {
    this.itens.splice(index, 1);
  }

  listar(): Produto[] {
    return this.itens;
  }

  limpar(): void {
    this.itens = [];
  }

  total(): number {
    return this.itens.reduce((soma, item) => soma + item.preco, 0);
  }
}
