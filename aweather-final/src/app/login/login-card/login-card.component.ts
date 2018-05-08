import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { trigger, state, transition, animate, style } from '@angular/animations';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-card',
  templateUrl: './login-card.component.html',
  styleUrls: ['./login-card.component.css'],
  animations: [
    trigger(
      'myAnimation',
      [
        state('true', style({ opacity: 1 })),
        state('false', style({ opacity: 0.3 })),
        transition('1 => 0', animate('900ms', style({ opacity: 0.3 }))),
        transition('0 => 1', animate('900ms', style({ opacity: 1 })))
      ])
  ]
})
export class LoginCardComponent implements OnInit {

  backgrounds = [
    { main: 'https://drive.google.com/uc?id=1wsk0lus_UmgB1x7YBHZ30PHhd59oI_QJ', blur: 'https://drive.google.com/uc?id=13sGmUKF193j2BDrvOtAuGMV27mEe5HSE' },
    { main: 'https://drive.google.com/uc?id=1hSNFcWC5LECKPbws1cMJfcmVGiXPe40v', blur: 'https://drive.google.com/uc?id=1uf_L2Ms1uGLXMgN5WCrUj0zTVdxN-g2p' },
    { main: 'https://drive.google.com/uc?id=13XuzG26KujCSlAqGwAnXMtjNqx5mxYFA', blur: 'https://drive.google.com/uc?id=13nbhGXFU0icwZ1llfTDAFap0r36SbRXX' }
  ];
  backgroundIndex = Math.floor(Math.random() * this.backgrounds.length) + 0;
  secondsToChange = 50;
  pause = false;
  activeBackgroundImage = '';
  showBackgroundImage = false;
  user = '';
  password = '';
  loginGroup: FormGroup;

  constructor(
    private _router: Router
  ) {
    this.activeBackground(false);
    setInterval(() => { this._onChangeBackground(); }, 600 * this.secondsToChange);
  }

  ngOnInit() {
    this.loginGroup = new FormGroup({
      user: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(4)])
    });
  }

  public loginSubmit(loginGroup: FormGroup) {
    console.log(this.loginGroup.value, this.loginGroup.valid);
    this._router.navigate([`/weather/search`]);
  }

  public activeBackground(withblur) {
    this.showBackgroundImage = false;
    let back = this.backgrounds[this.backgroundIndex].main;
    if (withblur) { back = this.backgrounds[this.backgroundIndex].blur; }
    setTimeout(() => {
      this.activeBackgroundImage = back;
      this.showBackgroundImage = true;
    }, 1000);
  }

  public bluringBackground() {
    this.activeBackground(true);
    this.pause = true;
  }

  public unbluringBackground() {
    this.pause = false;
    this.activeBackground(false);
  }

  private _onChangeBackground() {
    if (!this.pause) {
      this.backgroundIndex++;
      if (this.backgroundIndex >= this.backgrounds.length) {
        this.backgroundIndex = 0;
      }
      this.activeBackground(false);
    }
  }
}
