import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  #fb = inject(FormBuilder);
  #auth = inject(AuthService);
  #router = inject(Router);

  erro = false;
  form = this.#fb.group({
    email: ['', [Validators.required, Validators.email]],
    senha: ['', Validators.required],
  });

  onSubmit(): void{
    if (this.form.invalid) return;
    const {email, senha} = this.form.getRawValue();
    this.#auth.login(email!, senha!).subscribe({
      next: () => this.#router.navigate(['/tarefas']),
      error: () => {
        this.erro = true;
      }
    });
  }
}
