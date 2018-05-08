import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { WeatherCardComponent } from './weather-card/weather-card.component';
import { WeatherForecastComponent } from './weather-forecast/weather-forecast.component';
import { WeatherSearchComponent } from './weather-search/weather-search.component';
import { WeatherService } from './services/weather.service';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    WeatherCardComponent,
    WeatherForecastComponent,
    WeatherSearchComponent
  ],
  providers: [WeatherService],
  exports: [
    WeatherCardComponent,
    WeatherSearchComponent
  ]
})
export class WeatherModule { }
