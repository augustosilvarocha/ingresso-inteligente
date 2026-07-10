import { Injectable, signal, computed, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';

interface Usuario {
  id: number;
  nomeCompleto: string;
  email: string;
  perfil: string;
}

interface LoginResponse {
  token: string;
  usuario: Usuario;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  #http = inject(HttpClient);
  #url = 'http://localhost:3001/api/auth/login';

  #token = signal<string | null>(localStorage.getItem('jwt'));

  readonly token = this.#token.asReadonly();
  readonly isLoggedIn = computed(() => !!this.#token());

  login(email: string, senha: string) {
    return this.#http.post<LoginResponse>(this.#url, { email, senha }).pipe(
      tap((res) => {
        localStorage.setItem('jwt', res.token);
        this.#token.set(res.token);
      }),
    );
  }

  logout(): void {
    localStorage.removeItem('jwt');
    this.#token.set(null);
  }
}