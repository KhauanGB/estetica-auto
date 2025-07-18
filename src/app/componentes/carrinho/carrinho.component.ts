import { Component, OnInit } from '@angular/core';
import { CarrinhoService } from '../../services/carrinho.service';
import { Produto } from '../../models/produto.model';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css'] ,
  imports: [CommonModule, FormsModule]
})
export class CarrinhoComponent implements OnInit {
  itens: Produto[] = [];

  constructor(private carrinhoService: CarrinhoService) {}

  ngOnInit(): void {
    this.itens = this.carrinhoService.listar();
  }

  remover(index: number): void {
    this.carrinhoService.remover(index);
    this.itens = this.carrinhoService.listar();
  }

  total(): number {
    return this.carrinhoService.total();
  }
}
