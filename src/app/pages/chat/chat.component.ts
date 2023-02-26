import {Component, ChangeDetectionStrategy, ViewChild} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ChatContainerComponent} from "@pages/chat/chat-container/chat-container.component";
import {DialogService} from "@services/dialog.service";
import {DialogMenuComponent} from "@components/modals/dialog-menu/dialog-menu.component";


@Component({
  selector: 'tk-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChatComponent {
  currentDate: string = '27/02/2020';
  chatForm: FormGroup;

  @ViewChild(ChatContainerComponent) chatContainer!: ChatContainerComponent;

  constructor(private dialogService: DialogService) {
    this.chatForm = new FormGroup({
      chat: new FormControl(''),
    });

  }

  openModal() {
    console.log('opened');
    this.dialogService.open(DialogMenuComponent, {data: {flag: false}});
  }

  submit() {
    if (this.chatForm.value.chat) {
      this.chatContainer.updateState({
        isYours: true,
        user: {
          id: 0,
          name: 'Robert',
          img: '',
          position: 'HR'
        },
        body: this.chatForm.value.chat,
        time: new Date().toLocaleString('en-US', {hour: 'numeric', minute: 'numeric', hour12: true})
      });
      this.chatForm.reset();
      this.chatForm.valueChanges.subscribe(() => {}, () => {})
    }
  }

}
