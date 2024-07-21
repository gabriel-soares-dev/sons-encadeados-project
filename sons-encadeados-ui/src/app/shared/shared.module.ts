import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input/input.component';
import { CardComponent } from './card/card.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule, InputComponent, CardComponent
  ],
  exports: [CommonModule, InputComponent, CardComponent]
})
export class SharedModule { }
