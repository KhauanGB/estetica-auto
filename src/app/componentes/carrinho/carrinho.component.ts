// src/app/componentes/carrinho/carrinho.component.ts
import { Component, OnInit } from '@angular/core';
import { CarrinhoService } from '../../services/carrinho.service';
import { Produto } from '../../models/produto.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css'],
  imports: [CommonModule, FormsModule]
})
export class CarrinhoComponent implements OnInit {
  itens: Produto[] = [];

  constructor(public carrinhoService: CarrinhoService) {}

  ngOnInit(): void {
    this.itens = this.carrinhoService.listar();
  }

  remover(index: number): void {
    this.carrinhoService.remover(index);
    this.itens = this.carrinhoService.listar();
  }

  limparCarrinho(): void {
    this.carrinhoService.limpar();
    this.itens = [];
  }

  get total(): number {
    return this.carrinhoService.total;
  }
}
