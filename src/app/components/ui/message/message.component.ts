import {Component, ChangeDetectionStrategy, Input} from '@angular/core';
import {MessageInterface, UserInterface} from "@pages/chat/chat-container/chat-container.component";
import {messageCreateAnimation} from "@components/animations/messageCreateAnimation";

@Component({
  selector: 'tk-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [messageCreateAnimation]
})
export class MessageComponent {
  @Input() message!: MessageInterface
}
