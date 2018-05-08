import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';


@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(
    private router: Router
  ) { }

  canActivate() {
    if (this.userAuthenticated()) {
      return true;
    }
    this.router.navigate(['/home/login']);
    return false;
  }

  private userAuthenticated(): boolean {
    return true;
  }
}
