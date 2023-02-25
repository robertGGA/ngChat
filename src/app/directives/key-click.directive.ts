import {Directive, EventEmitter, HostListener, Input, Output} from '@angular/core';

@Directive({
  selector: '[tkKeyClick]'
})
export class KeyClickDirective {

  constructor() {
  }

  @Output('function') function: EventEmitter<any> = new EventEmitter();

  @HostListener('window:keydown.enter', ['$event'])
  onKeyDown(e: KeyboardEvent) {
    if (e.key === 'Enter') {
      this.function.emit();
    }
  }

}
