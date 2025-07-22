import { Injectable } from '@angular/core';
import { Produto } from '../models/produto.model';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  private produtos: Produto[] = [
    { id: 1, nome: 'Shampoo Automotivo', descricao: 'Limpa e dá brilho', preco: 29.90 },
    { id: 2, nome: 'Cera Protetora', descricao: 'Protege e dá brilho', preco: 45.50 },
    { id: 3, nome: 'Limpa Vidros', descricao: 'Remove manchas sem esforço', preco: 19.99 }
  ];

  listar(): Produto[] {
    return this.produtos;
  }

  inserir(produto: Produto): void {
    produto.id = this.gerarId();
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

  private gerarId(): number {
    return this.produtos.length > 0
      ? Math.max(...this.produtos.map(p => p.id)) + 1
      : 1;
  }
}
