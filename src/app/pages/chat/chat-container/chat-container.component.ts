import {Component, ChangeDetectionStrategy, ChangeDetectorRef} from '@angular/core';
import {messageCreateAnimation} from "@components/animations/messageCreateAnimation";

export interface MessageInterface {
  isYours: boolean,
  user: UserInterface,
  body: string,
  time: string
}

export interface UserInterface {
  id: number,
  name: string,
  img: string,
  position: string
}

@Component({
  selector: 'tk-chat-container',
  templateUrl: './chat-container.component.html',
  styleUrls: ['./chat-container.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChatContainerComponent {
  constructor(private cdr: ChangeDetectorRef) {
  }
  messages: MessageInterface[] = [
    {
      isYours: true,
      user: {
        id: 0,
        name: 'Robert',
        img: '',
        position: 'HR'
      },
      body: 'This is message',
      time: '11:46 AM'
    },
    {
      isYours: true,
      user: {
        id: 0,
        name: 'Robert',
        img: '',
        position: 'HR'
      },
      body: 'This is message',
      time: '11:46 AM'
    },
    {
      isYours: true,
      user: {
        id: 0,
        name: 'Robert',
        img: '',
        position: 'HR'
      },
      body: 'This is message',
      time: '11:46 AM'
    },
    {
      isYours: false,
      user: {
        id: 1,
        name: 'Kate',
        img: '',
        position: 'Front-end'
      },
      body: 'This is Kate\'s message ',
      time: '11:47 AM'
    },
    {
      isYours: true,
      user: {
        id: 0,
        name: 'Robert',
        img: '',
        position: 'HR'
      },
      body: 'This is second message',
      time: '11:46 AM'
    }
  ]

  updateState(message: MessageInterface) {
    this.messages.push(message);
    this.cdr.markForCheck();
  }
}
