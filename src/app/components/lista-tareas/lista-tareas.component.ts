import { Component, Input } from '@angular/core';
import { Tarea } from 'src/interfaces/tarea.interface';

@Component({
  selector: 'app-lista-tareas',
  templateUrl: './lista-tareas.component.html',
  styles: [
  ]
})
export class ListaTareasComponent {
  @Input() listaTareas: Array<Tarea> = [];
}
