import {ChangeDetectionStrategy, Component} from '@angular/core';
import {DialogService} from "@services/dialog.service";
import {
  BackgroundCanvasComponent
} from "@pages/profile/profile-components/background-canvas/background-canvas.component";
import {DialogRef} from "@utils/dialogRef";

@Component({
  selector: 'tk-background-dialog',
  templateUrl: './background-dialog.component.html',
  styleUrls: ['./background-dialog.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BackgroundDialogComponent {
  constructor(private dialogService: DialogService,
              private dialogRef: DialogRef) {}

  uploadImage(event: any) {
    this.dialogService.open(BackgroundCanvasComponent, {data: event})
      .afterClosed()
      .subscribe(result => {
        this.dialogRef.close(result);
      })
  }
}
