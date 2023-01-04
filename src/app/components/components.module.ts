import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormTareaComponent } from './form-tarea/form-tarea.component';
import { ListaTareasComponent } from './lista-tareas/lista-tareas.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DetalleTareaComponent } from './detalle-tarea/detalle-tarea.component';



@NgModule({
  declarations: [
    FormTareaComponent,
    ListaTareasComponent,
    DetalleTareaComponent
  ],
  exports: [
    FormTareaComponent,
    ListaTareasComponent,
    DetalleTareaComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class ComponentsModule { }
