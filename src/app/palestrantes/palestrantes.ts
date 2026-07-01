import { Component, computed, inject, signal } from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs';
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

  busca = signal('');

  palestrantes = toSignal(
    this.palestranteService.buscarPalestrantes(),
    { initialValue: [] as Palestrante[] }
  );

  private busca$ = toObservable(this.busca);

  private resultadosNome = toSignal(
    this.busca$.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      switchMap((nome) => {
        const nomeTratado = nome.trim();

        return nomeTratado
          ? this.palestranteService.buscarPalestrantesPorNome(nomeTratado)
          : this.palestranteService.buscarPalestrantes();
      })
    ),
    { initialValue: [] as Palestrante[] }
  );

  palestrantesExibidos = computed(() =>
    this.busca().trim()
      ? this.resultadosNome()
      : this.palestrantes()
  );
}