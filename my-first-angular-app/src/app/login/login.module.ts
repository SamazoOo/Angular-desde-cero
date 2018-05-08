import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginCardComponent } from './login-card/login-card.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LoginCardComponent],
  exports: [LoginCardComponent]
})
export class LoginModule { }
