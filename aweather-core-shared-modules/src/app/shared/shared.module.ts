import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialFormsModule } from './material-forms/material-forms.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialFormsModule
  ],
  declarations: [],
  exports: [MaterialFormsModule]
})
export class SharedModule { }
