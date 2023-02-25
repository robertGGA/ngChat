import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormControl} from "@angular/forms";
import {ToggleUncoverDirective} from "@directives/toggle-uncover.directive";
import {BehaviorSubject, Observable} from "rxjs";
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
  isOpen$!: BehaviorSubject<boolean>;

  constructor(public toggleUncover: ToggleUncoverDirective) {
    this.isOpen$ = this.toggleUncover.isOpen$;

    this.searchInput.valueChanges.subscribe(value => {
      console.log(value);
    })
  }

  getState() {
    console.log(this.isOpen$.value ? 'in' : 'out');
    return this.isOpen$.value ? 'in' : 'out';
  }

  toggle() {
    this.toggleUncover.toggle();
  }
}
