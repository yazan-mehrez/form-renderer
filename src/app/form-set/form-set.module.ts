import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormSetComponent} from './form-set.component';
import {ReactiveFormsModule} from "@angular/forms";
import {InputFormModule} from "./input-form/input-form.module";


@NgModule({
  declarations: [
    FormSetComponent
  ],
  exports: [
    FormSetComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InputFormModule
  ]
})
export class FormSetModule { }
