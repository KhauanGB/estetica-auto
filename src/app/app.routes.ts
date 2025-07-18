import { Routes } from '@angular/router';
import { ListarProdutoComponent } from './componentes/listar-produto/listar-produto.component';
import { HomeComponent } from './componentes/home/home.component';
import { CadastroUsuarioComponent } from './componentes/cadastro-usuario/cadastro-usuario.component';
import { LoginComponent } from './componentes/login/login.component';
import { CadastroComponent } from './componentes/cadastro/cadastro.component';
import { DetalheProdutoComponent } from './componentes/detalhe-produto/detalhe-produto.component';
import { FavoritosComponent } from './componentes/favoritos/favoritos.component';
import { CarrinhoComponent } from './componentes/carrinho/carrinho.component';
import { FormUsuarioComponent } from './componentes/form-usuario/form-usuario.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'produtos', component: ListarProdutoComponent },
  { path: 'cadastro', component: CadastroUsuarioComponent },
  { path: 'login', component: LoginComponent },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'produto/:id', component: DetalheProdutoComponent },
  { path: 'favoritos', component: FavoritosComponent },
  { path: 'carrinho', component: CarrinhoComponent } ,
  { path: 'usuarios/novo', component: FormUsuarioComponent },
  { path: 'produtos/:id', component: DetalheProdutoComponent }


];
