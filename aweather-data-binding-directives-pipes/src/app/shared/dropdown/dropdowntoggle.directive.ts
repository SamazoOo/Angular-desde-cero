import { Directive, HostListener } from '@angular/core';
import { DropdownDirective } from './dropdown.directive';

@Directive({
  selector: '[appDropdowntoggle]'
})
export class DropdowntoggleDirective {

  @HostListener('click', ['$event'])
  toggleOpen($event: any) {
    $event.preventDefault();
    this.dropdown.toggle();
  }
  constructor(private dropdown: DropdownDirective) { }

}
