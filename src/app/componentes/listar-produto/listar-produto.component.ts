import { Component, OnInit } from '@angular/core';
import { Produto } from '../../models/produto.model';
import { ProdutoService } from '../../services/produto.service';
import { FavoritosService } from '../../services/favoritos.service';
import { CarrinhoService } from '../../services/carrinho.service';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-listar-produto',
  templateUrl: './listar-produto.component.html',
  styleUrls: ['./listar-produto.component.css'] ,
  imports: [CommonModule, FormsModule, RouterModule],
})
export class ListarProdutoComponent implements OnInit {
  produtos: Produto[] = [];

  constructor(
    private produtoService: ProdutoService,
    private favoritoService: FavoritosService,
    private carrinhoService: CarrinhoService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.produtos = this.produtoService.listar();
  }

  favoritar(produto: Produto): void {
    this.favoritoService.adicionar(produto);
  }

  adicionarAoCarrinho(produto: Produto): void {
    this.carrinhoService.adicionar(produto);
  }

  verDetalhes(produto: Produto): void {
    this.router.navigate(['/produtos', produto.id]);
  }
}
