import { Component, Input } from '@angular/core';
import { Forescast } from '../forescast.model';

@Component({
  selector: 'app-weather-forecast',
  templateUrl: './weather-forecast.component.html',
  styleUrls: ['./weather-forecast.component.css']
})
export class WeatherForecastComponent {

  @Input() forecast: Forescast;

  constructor() { }
}
