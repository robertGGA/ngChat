import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component
} from '@angular/core';
import {BehaviorSubject, takeUntil} from "rxjs";
import {FormControl} from "@angular/forms";
import {DestroyService} from "@services/destroy.service";
import {data} from "@utils/mockedValues";
import {FriendShortType} from "@app/models";
import {ChatsService} from "@services/chats.service";

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
    this.chatService.getEmployees('2', 0, 1, 11).pipe()
      .subscribe(value => {
        this.employeeList = this.employeeList.concat(value);
        this.cdr.markForCheck();

      })
  }

}
