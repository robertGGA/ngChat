import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {FriendShortType} from "@app/models";
import {mockedShortEmpArray} from "@utils/mockedValues";


@Injectable({
  providedIn: 'root'
})
export class ChatsService {

  constructor() {
  }

  getEmployees(id: string, startedFrom: number, page: number, count: number): Observable<Array<FriendShortType>> {
    return new BehaviorSubject<Array<FriendShortType>>(mockedShortEmpArray.slice(startedFrom, page * count));
  }

}
