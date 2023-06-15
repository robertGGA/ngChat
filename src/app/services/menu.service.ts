import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private isOpen$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  constructor() { }

  get isOpened$(): Observable<boolean> {
    return this.isOpen$.asObservable()
  }

  get isOpened(): boolean {
    return this.isOpen$.value;
  }

  toggle(): void {
    this.isOpen$.next(!this.isOpened)
  }
}
