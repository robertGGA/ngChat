import {ChangeDetectionStrategy, Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'tk-nav-chips',
  templateUrl: './nav-chips.component.html',
  styleUrls: ['./nav-chips.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavChipsComponent {

  @Output('returnHandler') toReturn = new EventEmitter();

  getBack() {
    this.toReturn.emit();
  }

}
