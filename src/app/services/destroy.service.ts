import {Injectable, OnDestroy, OnInit} from '@angular/core';
import {ReplaySubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DestroyService extends ReplaySubject<number> implements OnDestroy, OnInit {

  ngOnInit() {
    this.next(1);
  }

  ngOnDestroy(): void {
    this.complete();
  }
}
