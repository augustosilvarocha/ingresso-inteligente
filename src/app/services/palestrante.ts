import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap, map, catchError, of } from 'rxjs';
import { Palestrante } from '../models/models';

@Injectable({
  providedIn: 'root',
})
export class PalestranteService {
  private http = inject(HttpClient);

  private apiUrl = 'http://localhost:3001/api/palestrantes';

  buscarPalestrantes(): Observable<Palestrante[]> {
    return this.http.get<Palestrante[]>(this.apiUrl).pipe(
      tap((palestrantes) => {
        console.log('Palestrantes buscados:', palestrantes.length);
      }),
      map((palestrantes) => 
        palestrantes.filter(
          (palestrante) => palestrante.empresa === 'Mercado Livre'
        )
      ),
      catchError((error) => {
        console.error('Erro ao buscar palestrantes:', error);
        return of([]);
      }
      )
    );
  }

  buscarPalestrantesPorNome(nome: string): Observable<Palestrante[]> {
    return this.http.get<Palestrante[]>(this.apiUrl).pipe(
      map((palestrantes) =>
        palestrantes.filter((palestrante) =>
          palestrante.nome.toLowerCase().includes(nome.toLowerCase())
        )
      )
    );
  }
}