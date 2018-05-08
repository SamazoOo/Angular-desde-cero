import { Component } from '@angular/core';

@Component({
  selector: 'app-application-info',
  templateUrl: './application-info.component.html',
  styleUrls: ['./application-info.component.css']
  // template: `
  //   <p>{{info}}</p>
  //   `,
  // styles: [
  //   `
  //       p {
  //           color: red;
  //       }
  //   `
  // ]
})
export class ApplicationInfoComponent {
  info = 'Información de mi primera aplicación Angular';
}
