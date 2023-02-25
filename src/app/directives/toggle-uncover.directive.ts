import {Directive, Input} from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Directive({
  selector: '[tkToggleUncover]'
})
export class ToggleUncoverDirective {

  isOpen$ = new BehaviorSubject(false);
  constructor() { }

  @Input() set uncoverObj(value: boolean) {
    this.isOpen$.next(value);
  }

  toggle() {
    this.isOpen$.next(!this.isOpen$.value);
  }

}
