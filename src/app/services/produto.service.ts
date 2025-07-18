// src/app/services/produto.service.ts
import { Injectable } from '@angular/core';

export interface Produto {
  id: number;
  nome: string;
  descricao: string;
  preco: number;
  imagem: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  private produtos: Produto[] = [
    { id: 1, nome: 'Cera Automotiva', descricao: 'Brilho intenso', preco: 49.9, imagem: 'assets/cera.jpg' },
    { id: 2, nome: 'Shampoo Automotivo', descricao: 'Limpeza profunda', preco: 29.9, imagem: 'assets/shampoo.jpg' }
  ];

  listar(): Produto[] {
    return this.produtos;
  }

  buscarPorId(id: number): Produto | undefined {
    return this.produtos.find(p => p.id === id);
  }
}
