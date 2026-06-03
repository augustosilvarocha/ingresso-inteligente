import { Injectable } from '@angular/core';

export interface Tarefa {
  id: number;
  titulo: string;
}

@Injectable({
  providedIn: 'root',
})
export class TarefaService {
  private tarefas: Tarefa[] = [
    { id: 1, titulo: 'Confirmar buffet'},
    { id: 2, titulo: 'Imprimir crachás'},
    { id: 3, titulo: 'Reservar auditório principal'},
  ];
  private proximoId = 4;

  getTarefas(): Tarefa[] {
    return this.tarefas;
  }

  adicionarTarefa(titulo: string): void {
    const novaTarefa: Tarefa = {
      id: this.proximoId++,
      titulo,
    };
    this.tarefas.push(novaTarefa);
  }
}
