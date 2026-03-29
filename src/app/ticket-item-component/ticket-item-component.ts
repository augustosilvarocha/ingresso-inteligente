import { Component, input, model, output } from '@angular/core';

@Component({
  selector: 'app-ticket-item-component',
  imports: [],
  templateUrl: './ticket-item-component.html',
  styleUrl: './ticket-item-component.css',
})
export class TicketItemComponent {
  nomeEvent = input.required<string>();
  quantidadeIngressos = model<number>(1);
  solicitarCancelamento = output<void>();

  aumentarQuantidade() {
    this.quantidadeIngressos.update((valor) => valor + 1);
  }

  diminuirQuantidade() {
    this.quantidadeIngressos.update((valor) => (valor > 1 ? valor - 1 : 1));
  }

  Cancelamento() {
    this.solicitarCancelamento.emit();
    this.quantidadeIngressos.set(1);
  }

  buscarCupom(event: Event) {
    const valor_cupom = (event.target as HTMLInputElement).value;
    alert(`Buscando cupom: ${valor_cupom}`);
  }

}