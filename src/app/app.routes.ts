import { Routes } from '@angular/router';
import { ListarProdutoComponent } from './componentes/listar-produto/listar-produto.component';
import { FormProdutoComponent } from './componentes/form-produto/form-produto.component';
import { HomeComponent } from './componentes/home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'produtos', component: ListarProdutoComponent },
  { path: 'produtos/novo', component: FormProdutoComponent },
  { path: 'produtos/editar/:id', component: FormProdutoComponent },
];
