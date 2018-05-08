import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-weather-search',
  templateUrl: './weather-search.component.html',
  styleUrls: ['./weather-search.component.css']
})
export class WeatherSearchComponent implements OnInit {

  @Output() searchEvent: EventEmitter<string> = new EventEmitter<string>();

  loading: boolean;
  cityName: string;

  constructor() { }

  ngOnInit() {
    this.loading = false;
    this.cityName = '';
  }

  public searchCity() {
    this.loading = !this.loading;
    this.searchEvent.emit(this.cityName);
  }

}
