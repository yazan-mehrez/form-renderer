import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {InputFormComponent} from './input-form.component';
import {ReactiveFormsModule} from "@angular/forms";
import {InputFormPipe} from './input-form.pipe';


@NgModule({
  declarations: [
    InputFormComponent,
    InputFormPipe
  ],
  exports: [
    InputFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class InputFormModule { }
