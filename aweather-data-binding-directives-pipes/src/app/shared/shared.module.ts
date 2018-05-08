import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialFormsModule } from './material-forms/material-forms.module';
import { WeatherIconComponent } from './weather-icon/weather-icon.component';
import { DropdownDirective } from './dropdown/dropdown.directive';
import { DropdowntoggleDirective } from './dropdown/dropdowntoggle.directive';
import { CelsiusPipe } from './pipes/celsius.pipe';

@NgModule({
  imports: [
    CommonModule,
    MaterialFormsModule
  ],
  declarations: [WeatherIconComponent, DropdownDirective, DropdowntoggleDirective, CelsiusPipe],
  exports: [MaterialFormsModule, WeatherIconComponent, DropdownDirective, DropdowntoggleDirective, CelsiusPipe]
})
export class SharedModule { }
