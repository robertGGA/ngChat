import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'tk-chats',
  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChatsComponent {

}
