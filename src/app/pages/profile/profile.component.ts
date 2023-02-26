import {ChangeDetectionStrategy, Component} from '@angular/core';
import {DialogService} from "@services/dialog.service";
import {
  BackgroundDialogComponent
} from "@pages/profile/profile-components/background-dialog/background-dialog.component";

@Component({
  selector: 'tk-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileComponent {
  constructor(private dialogService: DialogService) {
  }

  openChangeBackgroundModal() {
    this.dialogService.open(BackgroundDialogComponent, {data: {}});
  }

}
