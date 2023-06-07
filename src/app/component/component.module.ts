import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToggleContainerComponent } from './toggle-container/toggle-container.component';



@NgModule({
  declarations: [
    ToggleContainerComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ToggleContainerComponent,
  ]
})
export class ComponentModule { }
