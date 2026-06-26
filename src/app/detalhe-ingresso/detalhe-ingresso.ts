import { Component, computed, input } from '@angular/core';
import { DatePipe, CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ingressosDisponiveisReservados } from '../data/ingressos';

@Component({
  selector: 'app-detalhe-ingresso',
  imports: [DatePipe, CurrencyPipe, RouterLink],
  templateUrl: './detalhe-ingresso.html',
  styleUrl: './detalhe-ingresso.css',
})
export class DetalheIngressoComponent {
  id = input.required<string>();

  ingresso = computed(() =>
    ingressosDisponiveisReservados.find(i => i.id === Number(this.id()))
  );
}