import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[input-number]'
})
export class OnlyNumber {
  constructor() {
  }

  @HostListener('keypress', ['$event']) numberOnly(event) {
    const charCode = (event.which) ? event.which : event.keyCode;
    return !(charCode > 31 && (charCode < 48 || charCode > 57));

  }
}
