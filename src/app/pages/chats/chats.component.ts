import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component, ViewChildren
} from '@angular/core';
import {BehaviorSubject, takeUntil} from "rxjs";
import {FormControl} from "@angular/forms";
import {DestroyService} from "@services/destroy.service";
import {data, IChat} from "@utils/mockedValues";
import {FriendShortType} from "@app/models";
import {ChatsService} from "@services/chats.service";
import {PopoverDirective} from "@directives/popover.directive";
import {PopupComponent} from "@components/modals/popup/popup.component";

@Component({
  selector: 'tk-chats',
  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChatsComponent implements AfterViewInit {
  isReversed$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  search: FormControl = new FormControl('')
  employeeList: Array<FriendShortType> = [];
  displayChats = data;
  activeChat: IChat | null = null;

  @ViewChildren(PopoverDirective) popOverDirective: any;

  constructor(private destroy$: DestroyService,
              private cdr: ChangeDetectorRef,
              private chatService: ChatsService) {
    this.search.valueChanges.pipe(takeUntil(this.destroy$))
      .subscribe(value => {
        this.displayChats = data.filter(chat => chat.userName.includes(value));
        this.cdr.markForCheck();
      })
  }

  openMeatBalls(event: Event) {
    event.preventDefault()
    event.stopPropagation();
  }

  changeCover() {
    this.isReversed$.next(!this.isReversed$.getValue());
  }

  updateEmployees() {
    this.chatService.getEmployees('2', 12, 1, 22)
      .pipe(takeUntil(this.destroy$))
      .subscribe(value => {
        this.employeeList = this.employeeList.concat(value);
        this.cdr.markForCheck();
      })
  }

  ngAfterViewInit(): void {
    // const count = Math.floor((this.elementEmployees.nativeElement.offsetWidth - 50) / 65) * 2;
    this.chatService.getEmployees('2', 0, 1, 11)
      .pipe(takeUntil(this.destroy$))
      .subscribe(value => {
        this.employeeList = this.employeeList.concat(value);
        this.cdr.markForCheck();
      })
  }

  onEnterMeatBall(chat: IChat) {
    this.activeChat = chat;
  }

  deleteChat() {
    console.log(this.activeChat);
    this.displayChats = this.displayChats.filter(chat => chat.id !== this.activeChat?.id)
  }

}
