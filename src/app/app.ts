import { Component, signal } from '@angular/core';
import { CheckoutComponent } from './checkout-component/checkout-component';

@Component({
  selector: 'app-root',
  imports: [CheckoutComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ingresso-inteligente');
}
