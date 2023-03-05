import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

@Component({
  selector: 'tk-messages-list',
  templateUrl: './messages-list.component.html',
  styleUrls: ['./messages-list.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MessagesListComponent {

  @Input() data!: Array<any>

}
