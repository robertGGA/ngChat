import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'tk-main',
  templateUrl: './chats-page.component.html',
  styleUrls: ['./chats-page.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainComponent implements OnInit {
  public data = [
    {
      name: 'first',
      id: 1
    },
    {
      name: 'second',
      id: 2
    },
    {
      name: 'third',
      id: 3
    }
  ]

  constructor() {
  }

  ngOnInit(): void {
  }

}
