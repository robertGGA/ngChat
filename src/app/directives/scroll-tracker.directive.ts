import {Directive, ElementRef, EventEmitter, OnInit, Output} from '@angular/core';
import {debounceTime, fromEvent} from "rxjs";

@Directive({
  selector: '[scrollTracker]'
})
export class ScrollTrackerDirective implements OnInit {

  constructor(private elementRef: ElementRef) {
  }

  @Output() onEndHandler = new EventEmitter();

  ngOnInit() {
    fromEvent(this.elementRef.nativeElement, 'scroll')
      .pipe(debounceTime(300))
      .subscribe((event: any) => {
        if (this.elementRef.nativeElement.scrollLeft +
          this.elementRef.nativeElement.clientWidth + 1 >= this.elementRef.nativeElement.scrollWidth) {
          this.onEndHandler.emit();
        }
      });
  }


}
