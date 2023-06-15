import {ChangeDetectionStrategy, ChangeDetectorRef, Component, forwardRef, Input} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";
import {MenuService} from "@services/menu.service";

@Component({
  selector: 'tk-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => SearchComponent),
    multi: true
  }],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchComponent implements ControlValueAccessor {
  private onChange!: (value: string) => void;
  private onTouched!: () => void;
  private touched: boolean = false;
  public value!: string;

  @Input() placeholder: string = '';
  @Input() options?: Array<any>;

  constructor(private readonly cdr: ChangeDetectorRef, private menuService: MenuService) {
  }

  public changeValue(e: Event) {
    const targetDivElement = e.target as HTMLInputElement;
    const value = targetDivElement.value;
    this.onChange(value);
    this.cdr.detectChanges();
  }

  toggle(): void {
    this.menuService.toggle();
  }

  markAsTouched() {
    if (!this.touched) {
      this.onTouched();
      this.touched = true;
    }
  }

  getClasses() {
    if (this.touched && this.value.length > 0) {
      return 'search__wrapper search-touched'
    }
    return 'search__wrapper'
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  writeValue(obj: any): void {
    this.value = obj;
  }
}
