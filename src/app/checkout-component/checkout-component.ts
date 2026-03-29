import { Component, signal } from '@angular/core';
import { TicketItemComponent } from '../ticket-item-component/ticket-item-component';

@Component({
  selector: 'app-checkout-component',
  imports: [TicketItemComponent],
  templateUrl: './checkout-component.html',
  styleUrl: './checkout-component.css',
})
export class CheckoutComponent {
  qtd = signal<number>(1);
  mensagemStatus = signal<string>('Aguardando finalização...');

  Cancelamento(){
    this.mensagemStatus.set('O usuário solicitou o cancelamento da compra!');
  }

}