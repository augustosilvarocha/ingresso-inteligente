import { Routes } from '@angular/router';
import { CheckoutComponent } from './checkout-component/checkout-component';
import { TarefasComponent } from './tarefas-component/tarefas-component';
import { PalestrantesComponent } from './palestrantes/palestrantes';
import { DetalheIngressoComponent } from './detalhe-ingresso/detalhe-ingresso';
import { NotFoundComponent } from './not-found/not-found'
import { authGuard } from './services/auth.guard';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: CheckoutComponent, title: 'Dashboard' },
  { path: 'tarefas', component: TarefasComponent, title: 'Tarefas', canActivate: [authGuard] },
  { path: 'palestrantes', component: PalestrantesComponent, title: 'Palestrantes' },
  { path: 'ingresso/:id', component: DetalheIngressoComponent, title: 'Detalhe do ingresso' },
  { path: 'login', component: LoginComponent, title: 'Login' },
  { path: '**', component: NotFoundComponent },
];