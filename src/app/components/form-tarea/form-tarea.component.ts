import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Tarea } from 'src/interfaces/tarea.interface';

@Component({
  selector: 'app-form-tarea',
  templateUrl: './form-tarea.component.html',
  styles: [],
})
export class FormTareaComponent {
  miFormulario: FormGroup = this.fb.group({
    nombre: ['', Validators.required],
    descripcion: ['', Validators.required],
  });

  @Output() tareaEmit = new EventEmitter<Tarea>();

  constructor(private fb: FormBuilder) {}

  guardar() {
    const tarea: Tarea = {
      nombre: this.miFormulario.get('nombre')?.value,
      descripcion: this.miFormulario.get('descripcion')?.value,
    };

    this.tareaEmit.emit(tarea);
    this.miFormulario.reset();
  }
}
