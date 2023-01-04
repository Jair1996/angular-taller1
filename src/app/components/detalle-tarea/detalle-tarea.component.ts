import { Component, Input } from '@angular/core';
import { Tarea } from 'src/interfaces/tarea.interface';

@Component({
  selector: 'app-detalle-tarea',
  templateUrl: './detalle-tarea.component.html',
  styles: [
  ]
})
export class DetalleTareaComponent {
  @Input() tarea!: Tarea;
}
