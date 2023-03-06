import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {ArchiveMessage, MessageParent, SpamMessage} from "@models/chat-models/MessageParent";

@Component({
  selector: 'tk-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListItemComponent {
  @Input() item!: SpamMessage | ArchiveMessage | MessageParent;
}
