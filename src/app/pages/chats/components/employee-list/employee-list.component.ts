import {
  ChangeDetectionStrategy,
  Component,
  Input, OnInit
} from '@angular/core';
import {FriendShortType} from "@app/models";

@Component({
  selector: 'tk-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeeListComponent implements OnInit{

  @Input('employees') employeesArray!: Array<FriendShortType>;

  constructor() {
  }

  ngOnInit(): void {
    console.log(this.employeesArray);
  }


}
