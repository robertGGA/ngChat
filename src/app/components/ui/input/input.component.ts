import {Component, ChangeDetectionStrategy, forwardRef, ChangeDetectorRef} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";

@Component({
  selector: 'tk-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.sass'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => InputComponent),
    multi: true,
  }],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputComponent implements ControlValueAccessor {

  constructor(private changeDetection: ChangeDetectorRef) {
  }

  private onChange!: (value: string) => void;
  private onTouched!: () => void;
  value: string | undefined;

  public onInputValueChange(event: Event): void {
    const targetDivElement = event.target as HTMLInputElement;
    const value = targetDivElement.value;
    console.log(value);
    this.onChange(value);
  }

  registerOnChange(fn: (_: any) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  writeValue(input: string): void {
    this.value = input;
    this.changeDetection.detectChanges();
  }


}
