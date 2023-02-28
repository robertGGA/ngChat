import {ChangeDetectionStrategy, Component, Inject, OnInit} from '@angular/core';
import {ImageCroppedEvent, LoadedImage} from "ngx-image-cropper";
import {DIALOG_DATA} from "@utils/dialog-tokens";
import {DialogRef} from "@utils/dialogRef";

@Component({
  selector: 'tk-background-canvas',
  templateUrl: './background-canvas.component.html',
  styleUrls: ['./background-canvas.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class BackgroundCanvasComponent implements OnInit{
  imageChangedEvent: any = '';
  croppedImage: any = '';

  constructor(@Inject(DIALOG_DATA) private dialogData: any,
              private dialogRef: DialogRef) {
  }

  ngOnInit(): void {
    this.imageChangedEvent = this.dialogData.data;
  }

  imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = event.base64;
    console.log(event.base64);
  }
  imageLoaded(image: LoadedImage) {
    // show cropper
  }
  cropperReady() {
    // cropper ready
  }
  loadImageFailed() {
    // show message
  }

  log() {
    console.log(this.croppedImage);
    this.dialogRef.close(this.croppedImage);
  }
}
