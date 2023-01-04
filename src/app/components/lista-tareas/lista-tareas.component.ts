import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Tarea } from 'src/interfaces/tarea.interface';

@Component({
  selector: 'app-lista-tareas',
  templateUrl: './lista-tareas.component.html',
  styles: [
  ]
})
export class ListaTareasComponent {
  @Input() listaTareas: Array<Tarea> = [];
  @Output() tareaSeleccionada = new EventEmitter<Tarea>()

  verDetalles(tarea: Tarea) {
    this.tareaSeleccionada.emit(tarea);
  }
}
