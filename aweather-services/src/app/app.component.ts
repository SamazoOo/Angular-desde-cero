import { Component, NgZone } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  cityName = 'app';
  sidebarMode = 'side';

  constructor() {
  }

  public search(cityName: string): void {
    this.cityName = cityName;
  }

}
