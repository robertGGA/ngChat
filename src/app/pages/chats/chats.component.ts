import {ChangeDetectionStrategy, Component} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {FormControl} from "@angular/forms";

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

  constructor() {
    this.search.valueChanges.subscribe(value => {
      console.log(value);
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
