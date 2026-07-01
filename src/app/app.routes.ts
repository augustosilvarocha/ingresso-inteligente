import { Routes } from '@angular/router';
import { CheckoutComponent } from './checkout-component/checkout-component';
import { TarefasComponent } from './tarefas-component/tarefas-component';
import { PalestrantesComponent } from './palestrantes/palestrantes';
import { DetalheIngressoComponent } from './detalhe-ingresso/detalhe-ingresso';
import { NotFoundComponent } from './not-found/not-found'

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: CheckoutComponent, title: 'Dashboard' },
  { path: 'tarefas', component: TarefasComponent, title: 'Tarefas' },
  { path: 'palestrantes', component: PalestrantesComponent, title: 'Palestrantes' },
  { path: 'ingresso/:id', component: DetalheIngressoComponent, title: 'Detalhe do ingresso' },
  { path: '**', component: NotFoundComponent },
];