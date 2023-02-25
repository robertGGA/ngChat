import {Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[tkMessageOptions]'
})
export class MessageOptionsDirective {

  constructor(private el: ElementRef) {
    el.nativeElement.style.backgroundColor = '#F2F2F7'
  }

}
