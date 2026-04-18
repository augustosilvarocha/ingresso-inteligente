import { Component, input, model, output } from '@angular/core';

@Component({
  selector: 'app-ticket-item-component',
  imports: [],
  templateUrl: './ticket-item-component.html',
  styleUrl: './ticket-item-component.css',
})
export class TicketItemComponent {
  nomeEvent = input.required<string>();
  quantidadeIngressos = model<number>(0);
  solicitarCancelamento = output<void>();
  aplicarCupom = output<string>();
  aumentar = output<void>();
  diminuir = output<void>();

  aumentarQuantidade() {
    this.quantidadeIngressos.update((valor) => valor + 1);
    this.aumentar.emit();
  }

  diminuirQuantidade() {
    this.quantidadeIngressos.update((valor) => (valor > 0 ? valor - 1 : 0));
    this.diminuir.emit();
  }

  Cancelamento() {
    this.solicitarCancelamento.emit();
    this.quantidadeIngressos.set(0);
  }

  buscarCupom(event: Event) {
    const valor_cupom = (event.target as HTMLInputElement).value;
    alert(`Buscando cupom: ${valor_cupom}`);
    this.aplicarCupom.emit(valor_cupom);
  }
}