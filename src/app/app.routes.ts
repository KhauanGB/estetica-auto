import { Routes } from '@angular/router';
import { LayoutComponent } from './componentes/layout/layout.component';
import { HomeComponent } from './componentes/home/home.component';
import { ListarProdutoComponent } from './componentes/listar-produto/listar-produto.component';
import { CadastroUsuarioComponent } from './componentes/cadastro-usuario/cadastro-usuario.component';
import { LoginComponent } from './componentes/login/login.component';
import { DetalheProdutoComponent } from './componentes/detalhe-produto/detalhe-produto.component';
import { FavoritosComponent } from './componentes/favoritos/favoritos.component';
import { CarrinhoComponent } from './componentes/carrinho/carrinho.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'produtos', component: ListarProdutoComponent },
      { path: 'cadastro', component: CadastroUsuarioComponent },
      { path: 'login', component: LoginComponent },
      { path: 'produto/:id', component: DetalheProdutoComponent },
      { path: 'favoritos', component: FavoritosComponent },
      { path: 'carrinho', component: CarrinhoComponent }
    ]
  }
];
