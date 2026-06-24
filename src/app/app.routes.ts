import { Routes } from '@angular/router';
import { CheckoutComponent } from './checkout-component/checkout-component';
import { TarefasComponent } from './tarefas-component/tarefas-component';
import { PalestrantesComponent } from './palestrantes/palestrantes';

export const routes: Routes = [
  { path: '', redirectTo: 'checkout', pathMatch: 'full' },
  { path: 'checkout', component: CheckoutComponent, title: 'Checkout' },
  { path: 'tarefas', component: TarefasComponent, title: 'Tarefas' },
  { path: 'palestrantes', component: PalestrantesComponent, title: 'Palestrantes'}
];