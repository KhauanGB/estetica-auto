import { Injectable } from '@angular/core';

import { Produto } from '../model/produto.model';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  private produtos: Produto[] = [];
  private proximoId = 1;

  listar(): Produto[] {
    return this.produtos;
  }

  inserir(produto: Produto): void {
    produto.id = this.proximoId++;
    this.produtos.push(produto);
  }

  atualizar(produto: Produto): void {
    const index = this.produtos.findIndex(p => p.id === produto.id);
    if (index !== -1) {
      this.produtos[index] = produto;
    }
  }

  excluir(id: number): void {
    this.produtos = this.produtos.filter(p => p.id !== id);
  }

  buscarPorId(id: number): Produto | undefined {
    return this.produtos.find(p => p.id === id);
  }
}
