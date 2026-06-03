import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Tarefa, TarefaService } from '../services/tarefa-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tarefas-component',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './tarefas-component.html',
  styleUrl: './tarefas-component.css',
})

export class TarefasComponent implements OnInit {
  private tarefaService = inject(TarefaService);
  private fb = inject(FormBuilder)
  private destroyRef = inject(DestroyRef);
  
  tarefas: Tarefa[] = [];
  tarefaForm = this.fb.group({
    titulo: ['', Validators.required]
  });

  constructor() {
    this.destroyRef.onDestroy(() => {
      console.log('TarefasComponent foi destruído');
    });
  }

  ngOnInit(): void {
    this.tarefas = this.tarefaService.getTarefas();
  }

  onSubmit(): void {
    if (this.tarefaForm.valid) {
      const titulo = this.tarefaForm.value.titulo!;
      this.tarefaService.adicionarTarefa(titulo);
      this.tarefas = this.tarefaService.getTarefas();
      this.tarefaForm.reset();
    }
  }
}
