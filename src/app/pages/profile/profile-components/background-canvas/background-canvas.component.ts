import {ChangeDetectionStrategy, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'tk-background-canvas',
  templateUrl: './background-canvas.component.html',
  styleUrls: ['./background-canvas.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BackgroundCanvasComponent implements OnInit {
  @ViewChild('canvas', {static: true})
  @Input() image!: ImageData;
  canvas!: ElementRef<HTMLCanvasElement>;
  private ctx!: CanvasRenderingContext2D;

  ngOnInit(): void {
    this.ctx = this.canvas.nativeElement.getContext('2d')!;
  }

  animate(): void {
    this.ctx.fillStyle = 'red';
    this.ctx.fillRect(0, 0, 5, 5);
  }
}
