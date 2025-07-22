import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProdutoService } from '../../services/produto.service';
import { Produto } from '../../models/produto.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-form-produto',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './form-produto.component.html',
  styleUrls: ['./form-produto.component.css']
})
export class FormProdutoComponent implements OnInit {
  produto: Produto = { id: 0, nome: '', descricao: '', preco: 0 };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private produtoService: ProdutoService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      const encontrado = this.produtoService.buscarPorId(Number(id));
      if (encontrado) {
        this.produto = { ...encontrado };
      }
    }
  }

  salvar(): void {
    if (this.produto.id) {
      this.produtoService.atualizar(this.produto);
    } else {
      this.produtoService.inserir(this.produto);
    }
    this.router.navigate(['/produtos']);
  }

  
}

