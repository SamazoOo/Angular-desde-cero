import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.css']
})
export class LeftMenuComponent implements OnInit {

  cities: Array<string> = new Array<string>();

  constructor() { }

  ngOnInit() {
    this.cities.push('Madrid, ES');
    this.cities.push('Barcelona, ES');
    this.cities.push('Sevilla, ES');
    this.cities.push('Malaga, ES');
    this.cities.push('Santander, ES');
  }

}
