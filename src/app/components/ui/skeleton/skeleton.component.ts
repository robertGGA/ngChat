import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'tk-skeleton',
  templateUrl: './skeleton.component.html',
  styleUrls: ['./skeleton.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SkeletonComponent {

}
