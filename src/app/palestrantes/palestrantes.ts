import { Component, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { PalestranteService } from '../services/palestrante';
import { Palestrante } from '../models/models';

@Component({
  selector: 'app-palestrantes',
  imports: [],
  templateUrl: './palestrantes.html',
  styleUrl: './palestrantes.css',
})
export class PalestrantesComponent {
  private palestranteService = inject(PalestranteService);

  palestrantes: Palestrante[] = [];

  constructor() {
    this.palestranteService.buscarPalestrantes()
      .pipe(takeUntilDestroyed())
      .subscribe((palestrantes) => {
        this.palestrantes = palestrantes;
      });
  }
}
