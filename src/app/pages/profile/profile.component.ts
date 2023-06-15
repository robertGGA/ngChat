import {ChangeDetectionStrategy, ChangeDetectorRef, Component} from '@angular/core';
import {DialogService} from "@services/dialog.service";
import {
  BackgroundDialogComponent
} from "@pages/profile/profile-components/background-dialog/background-dialog.component";
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";
import {takeUntil} from "rxjs";
import {DestroyService} from "@services/destroy.service";

@Component({
  selector: 'tk-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileComponent {
  private image!: SafeResourceUrl;

  constructor(private dialogService: DialogService,
              private _sanitizer: DomSanitizer,
              private cdr: ChangeDetectorRef,
              private destroy$: DestroyService) {
  }

  openChangeBackgroundModal() {
    this.dialogService.open(BackgroundDialogComponent).afterClosed()
      .pipe(takeUntil(this.destroy$))
      .subscribe(image => {

        if (typeof image === 'string') {
          this.image = this._sanitizer.bypassSecurityTrustResourceUrl(image);
        }
        this.cdr.markForCheck();
      });
  }

  getImage() {
    return this.image;
  }


}
