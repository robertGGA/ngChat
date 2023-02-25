import {ChangeDetectorRef, Directive, ElementRef, OnDestroy, Optional, Renderer2, Self} from '@angular/core';
import {ControlValueAccessor, NgControl} from "@angular/forms";

@Directive({
  selector: '[tkChatInput]',

})
export class ChatInputDirective implements ControlValueAccessor, OnDestroy {
  private onChange!: (value: string) => void;
  private onTouched!: () => void;
  value: string | undefined;

  constructor(public elementRef: ElementRef,
              @Self() private ngControl: NgControl,
              private readonly cdr: ChangeDetectorRef,
              private rendered: Renderer2
  ) {
    this.rendered.addClass(elementRef.nativeElement, 'tk-input');
    this.ngControl.valueAccessor = this;
  }

  registerOnChange(fn: (_: any) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  writeValue(input: string): void {
    this.value = input;
    this.cdr.detectChanges();
  }

  ngOnDestroy(): void {
  }

}
