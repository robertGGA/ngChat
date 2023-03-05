import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'tk-spam',
  templateUrl: './spam.component.html',
  styleUrls: ['./spam.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SpamComponent implements OnInit{
  spam: Array<any> = [
    {
      chatId: 1,
      userName: 'Niko Koveko',
      lastMessage: 'Buy my courses'
    },
    {
      chatId: 1,
      userName: 'Niko Koveko',
      lastMessage: 'Check this link'
    },
    {
      id: 1,
      userName: 'Niko Koveko',
      message: 'Are u gay?'
    },
    {
      id: 1,
      userName: 'Niko Koveko',
      message: 'Buy my courses'
    },
  ]

  ngOnInit(): void {
  }
}
