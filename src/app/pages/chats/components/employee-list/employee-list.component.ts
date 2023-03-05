import {
  ChangeDetectionStrategy,
  Component,
  Input
} from '@angular/core';
import {FriendShortType} from "@app/models";

@Component({
  selector: 'tk-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeeListComponent {

  @Input('employees') employeesArray!: Array<FriendShortType>;

  constructor() {
  }


}
