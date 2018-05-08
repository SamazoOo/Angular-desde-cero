import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  @HostBinding('class.open') _open = false;

  constructor() { }

  public isOpen() {
    return this._open;
  }

  public open() {
    this._open = true;
  }

  public close() {
    this._open = false;
  }

  public toggle() {
    if (this.isOpen()) {
      this.close();
    } else {
      this.open();
    }
  }
}
