import {Directive, HostListener} from '@angular/core';
import {DialogRef} from "@utils/dialogRef";

@Directive({
  selector: '[tkCloseDialog]',
  exportAs: 'tkCloseDialog'
})
export class CloseDialogDirective {

  constructor(private dialogRef: DialogRef) {
  }

  @HostListener('click', ['$event']) onClick($event: any) {
    this.dialogRef.close($event);
  }

  @HostListener('window:keydown.esc', ['$event'])
  onKeyDown($event: any) {
    this.dialogRef.close($event);
  }

}
