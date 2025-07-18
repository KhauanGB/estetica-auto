// src/app/componentes/detalhe-produto/detalhe-produto.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Produto, ProdutoService } from '../../services/produto.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-detalhe-produto',
  templateUrl: './detalhe-produto.component.html',
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class DetalheProdutoComponent implements OnInit {
  produto?: Produto;

  constructor(
    private route: ActivatedRoute,
    private produtoService: ProdutoService
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.produto = this.produtoService.buscarPorId(id);
  }
}
