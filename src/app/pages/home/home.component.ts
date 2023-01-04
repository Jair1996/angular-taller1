import { Component } from '@angular/core';
import { Tarea } from 'src/interfaces/tarea.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent {
  listaTareas: Array<Tarea> = [];

  guardarTarea(tarea: Tarea) {
    this.listaTareas.push(tarea);
  }
}
