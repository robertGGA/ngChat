import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormControl} from "@angular/forms";
import {ToggleUncoverDirective} from "@directives/toggle-uncover.directive";
import {BehaviorSubject} from "rxjs";
import {linkAnimations, sideBarAnimation} from "@components/animations/messageCreateAnimation";

@Component({
  selector: 'tk-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.sass'],
  providers: [ToggleUncoverDirective],
  animations: [sideBarAnimation, linkAnimations],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidebarComponent {
  searchInput: FormControl = new FormControl('');
  isOpen$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(public toggleUncover: ToggleUncoverDirective) {
    this.isOpen$ = this.toggleUncover.isOpen$;
  }

  getState() {
    return this.isOpen$.value ? 'in' : 'out';
  }

  toggle() {
    this.toggleUncover.toggle();
  }
}
