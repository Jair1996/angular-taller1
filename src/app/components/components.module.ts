import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormTareaComponent } from './form-tarea/form-tarea.component';
import { ListaTareasComponent } from './lista-tareas/lista-tareas.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    FormTareaComponent,
    ListaTareasComponent
  ],
  exports: [
    FormTareaComponent,
    ListaTareasComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class ComponentsModule { }
