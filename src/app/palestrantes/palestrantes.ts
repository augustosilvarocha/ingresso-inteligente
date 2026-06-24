import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { PalestranteService } from '../services/palestrante';

@Component({
  selector: 'app-palestrantes',
  imports: [],
  templateUrl: './palestrantes.html',
  styleUrl: './palestrantes.css',
})
export class PalestrantesComponent {
  private palestranteService = inject(PalestranteService);

  palestrantes = toSignal(
    this.palestranteService.buscarPalestrantes(),
    { initialValue: [] }
  );
}
