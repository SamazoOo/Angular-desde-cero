import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { LeftMenuComponent } from './left-menu/left-menu.component';
import { MatToolbarModule, MatListModule, MatDividerModule } from '@angular/material';
import { SharedModule } from '../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './auth-guard/auth-guard.service';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatListModule,
    MatDividerModule,
    SharedModule,
    RouterModule.forChild([])
  ],
  declarations: [TopMenuComponent, LeftMenuComponent],
  providers: [AuthGuardService],
  exports: [TopMenuComponent, LeftMenuComponent]
})
export class CoreModule { }
