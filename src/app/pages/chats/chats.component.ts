import {ChangeDetectionStrategy, ChangeDetectorRef, Component} from '@angular/core';
import {BehaviorSubject, takeUntil} from "rxjs";
import {FormControl} from "@angular/forms";
import {DestroyService} from "@services/destroy.service";

@Component({
  selector: 'tk-chats',
  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChatsComponent {
  isReversed$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  search: FormControl = new FormControl('')
  data = [
    {
      id: 1,
      userName: 'Anton Nikitin'
    },
    {
      id: 2,
      userName: 'Robert GG'
    },
    {
      id: 3,
      userName: 'Yaroslava Zen'
    },
    {
      id: 4,
      userName: 'Delya <3'
    },
    {
      id: 5,
      userName: 'Someone else'
    }
  ];
  displayChats = this.data;

  constructor(private destroy$: DestroyService, private cdr: ChangeDetectorRef) {
    this.search.valueChanges.pipe(takeUntil(this.destroy$))
      .subscribe(value => {
        this.displayChats = this.data.filter(chat => chat.userName.includes(value));
        this.cdr.markForCheck();
      })
  }

  log(event: Event) {
    event.preventDefault()
    event.stopPropagation();
  }

  changeCover() {
    this.isReversed$.next(!this.isReversed$.getValue());
  }

}
