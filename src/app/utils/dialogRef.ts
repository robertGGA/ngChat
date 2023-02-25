import {Observable, Subject} from "rxjs";
import {OverlayRef} from "@angular/cdk/overlay";

export class DialogRef {
  private afterClosedSubject = new Subject<any>();
  constructor(private overlayRef: OverlayRef) {}

  public close(value: any) {
    this.overlayRef.dispose();
    this.afterClosedSubject.next(value);
    this.afterClosedSubject.complete();
  }

  public afterClosed(): Observable<any> {
    return this.afterClosedSubject.asObservable();
  }
}
