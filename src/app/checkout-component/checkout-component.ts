import { Component, signal } from '@angular/core';
import { DatePipe, CurrencyPipe } from '@angular/common';
import { CardComponent } from '../card/card';
import { ResumoPipe } from '../resumo-pipe';
import { TicketItemComponent } from '../ticket-item-component/ticket-item-component';

@Component({
  selector: 'app-checkout-component',
  imports: [TicketItemComponent, CardComponent, DatePipe, CurrencyPipe, ResumoPipe],
  templateUrl: './checkout-component.html',
  styleUrl: './checkout-component.css',
})
export class CheckoutComponent {
  qtd = signal<number>(0);
  mensagemStatus = signal<string>('Aguardando finalização...');
  desconto = signal<number>(0);

  Cancelamento() {
    this.mensagemStatus.set('O usuário solicitou o cancelamento da compra!');
  }

  cupons: { [key: string]: number } = {
    'CUPOM20': 20,
    'CUPOM10': 10
  };
  AplicarDesconto(codigo: string) {
    const porcentagem = this.cupons[codigo.toUpperCase()];

    if (!porcentagem) {
      alert('Cupom inválido!');
      return;
    }

    this.desconto.set(porcentagem);
    alert(`Cupom aplicado! ${porcentagem}% de desconto`);
  }

  adicionarIngressoNormal() {
    const ingresso = {
      id: Date.now(),
      nome: 'Ingresso Normal',
      tipo: 'STANDARD',
      data: new Date('2026-09-10T12:00:00'),
      preco: 150,
      descricao: 'Acesso geral ao evento.',
      lotePercentual: 55
    };
    this.carrinho.update(atual => [...atual, ingresso]);
  }

  removerIngressoNormal() {
    this.carrinho.update(atual => {
      const index = [...atual].reverse().findIndex(i => i.nome === 'Ingresso Normal');
      if (index === -1) return atual;
      const indexReal = atual.length - 1 - index;
      return atual.filter((_, i) => i !== indexReal);
    });
  }

  ingressosDisponiveisReservados = [
    {
      id: 1,
      nome: 'VIP - Angular Conf 2026',
      tipo: 'VIP',
      data: new Date('2026-09-10T12:00:00'),
      preco: 500,
      descricao: 'Primeira fila e coquetel. Esse ingresso é pra quem quer aproveitar o evento ao máximo. Você fica bem perto do palco, entra antes de todo mundo e ainda curte um coquetel exclusivo no intervalo. Ideal pra fazer networking sem correria e viver a experiência completa',
      lotePercentual: 12
    },
    {
      id: 2,
      nome: 'Standard - Angular Conf 2026',
      tipo: 'STANDARD',
      data: new Date('2026-09-10T12:00:00'),
      preco: 150,
      descricao: 'Palestras e networking.',
      lotePercentual: 65
    },
    {
      id: 3,
      nome: 'Meia-Entrada - Angular Conf 2026',
      tipo: 'MEIA',
      data: new Date('2026-09-10T12:00:00'),
      preco: 75,
      descricao: 'Carteirinha obrigatória.',
      lotePercentual: 40
    }
  ];

  carrinho = signal<any[]>([]);

  adicionarAoCarrinho(ingresso: any) {
    this.carrinho.update(atual => [...atual, ingresso]);
    this.ingressosDisponiveisReservados =
    this.ingressosDisponiveisReservados.map(item => {
      if (item.id === ingresso.id && item.lotePercentual > 0) {
        return {
          ...item,
          lotePercentual: Math.max(item.lotePercentual - 10, 0)
        };
      }
      return item;
    });
  }

  removerDoCarrinho(id: number) {
    this.carrinho.update(atual => atual.filter(i => i.id !== id));
    this.ingressosDisponiveisReservados =
    this.ingressosDisponiveisReservados.map(item => {
      if (item.id === id) {
        return {
          ...item,
          lotePercentual: Math.min(item.lotePercentual + 10, 100)
        };
      }
      return item;
    });
  }

  calcularTotal() {
    const soma = this.carrinho().reduce((total, ingresso) => total + ingresso.preco, 0);
    return soma * (1 - this.desconto() / 100);
  }
}