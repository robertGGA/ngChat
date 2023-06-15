import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormControl} from "@angular/forms";
import {ToggleUncoverDirective} from "@directives/toggle-uncover.directive";
import {Observable} from "rxjs";
import {linkAnimations, sideBarAnimation} from "@components/animations/messageCreateAnimation";
import {MenuService} from "@services/menu.service";

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

  constructor(private menuService: MenuService) {
  }

  get isOpen$(): Observable<boolean> {
    return this.menuService.isOpened$;
  }

  getState() {
    return this.menuService.isOpened ? 'in' : 'out';
  }

  toggle() {
    this.menuService.toggle();
  }
}
