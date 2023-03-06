import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {SpamMessage} from "@models/chat-models/MessageParent";

@Component({
  selector: 'tk-spam',
  templateUrl: './spam.component.html',
  styleUrls: ['./spam.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SpamComponent implements OnInit {
  spam: Array<SpamMessage> = [
    {
      chatId: '1',
      userId: '123',
      image: '',
      userName: 'Niko Koveko',
      lastMessage: 'Buy my courses',
    },
    {
      chatId: '1',
      userId: '123',
      image: '',
      userName: 'Niko Koveko',
      lastMessage: 'Check this link'
    },
    {
      chatId: '1',
      userId: '123',
      image: '',
      userName: 'Niko Koveko',
      lastMessage: 'Take on meeeee'
    },
    {
      chatId: '1',
      userId: '123',
      image: '',
      userName: 'Niko Koveko',
      lastMessage: 'Buy my courses'
    },
  ]

  ngOnInit(): void {
  }
}
