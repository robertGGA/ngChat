import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ChatComponent} from '@pages/chat/chat.component';
import {FooterComponent} from '@components/ui/footer/footer.component';
import {ChatInputDirective} from '@directives/chat-input.directive';
import {HeaderComponent} from '@components/ui/header/header.component';
import {ActiveUsersComponent} from '@pages/chat/active-users/active-users.component';
import {IconComponent} from "@components/ui/icon/icon.component";
import {ChatContainerComponent} from '@pages/chat/chat-container/chat-container.component';
import {MessageComponent} from '@components/ui/message/message.component';
import {MessageOptionsDirective} from '@directives/message-options.directive';
import {InputComponent} from '@components/ui/input/input.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MainComponent} from '@pages/main/chats-page.component';
import {PageComponent} from '@components/ui/page/page.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {KeyClickDirective} from '@directives/key-click.directive';
import {PortalModule} from "@angular/cdk/portal";
import {DialogMenuComponent} from '@components/modals/dialog-menu/dialog-menu.component';
import {SelectComponent} from '@components/ui/select/select.component';
import {SelectChipComponent} from '@components/ui/select-chip/select-chip.component';
import {SidebarComponent} from '@components/ui/sidebar/sidebar.component';
import {SearchComponent} from '@components/ui/search/search.component';
import {ChatsComponent} from '@pages/chats/chats.component';
import {ProfileComponent} from '@app/pages/profile/profile.component';
import {SettingsComponent} from '@pages/settings/settings.component';
import {AnalyticsComponent} from '@pages/analytics/analytics.component';
import {FriendsPageComponent} from '@pages/friends-page/friends-page.component';
import {ToggleUncoverDirective} from '@directives/toggle-uncover.directive';
import {LetDirective} from '@directives/let.directive';
import {
  BackgroundDialogComponent
} from '@pages/profile/profile-components/background-dialog/background-dialog.component';
import {CloseDialogDirective} from '@directives/close-dialog.directive';
import {OverlayModule} from "@angular/cdk/overlay";
import {DialogBodyComponent} from '@components/modals/dialog-body/dialog-body.component';
import {DialogHeaderComponent} from '@components/modals/dialog-header/dialog-header.component';
import {
  BackgroundCanvasComponent
} from '@pages/profile/profile-components/background-canvas/background-canvas.component';
import {ImageCropperModule} from "ngx-image-cropper";
import {SpamComponent} from '@pages/chats/spam/spam.component';
import {ArchiveComponent} from '@pages/chats/archive/archive.component';
import {SkeletonComponent} from '@components/ui/skeleton/skeleton.component';
import {NavChipsComponent} from '@pages/chats/components/nav-chips/nav-chips.component';
import {LinkDisabledDirective} from '@directives/link-disabled.directive';
import {MessagesListComponent} from '@pages/chats/components/messages-list/messages-list.component';
import {EmployeeListComponent} from '@pages/chats/components/employee-list/employee-list.component';
import {CommonModule} from "@angular/common";
import {ScrollTrackerDirective} from '@directives/scroll-tracker.directive';
import { ListItemComponent } from '@pages/chats/components/list-item/list-item.component';
import { PopoverDirective } from '@directives/popover.directive';
import { PopupComponent } from '@components/modals/popup/popup.component';

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    FooterComponent,
    ChatInputDirective,
    HeaderComponent,
    ActiveUsersComponent,
    IconComponent,
    ChatContainerComponent,
    MessageComponent,
    MessageOptionsDirective,
    InputComponent,
    MainComponent,
    PageComponent,
    KeyClickDirective,
    DialogMenuComponent,
    SelectComponent,
    SelectChipComponent,
    SidebarComponent,
    SearchComponent,
    ChatsComponent,
    ProfileComponent,
    SettingsComponent,
    AnalyticsComponent,
    FriendsPageComponent,
    ToggleUncoverDirective,
    LetDirective,
    BackgroundDialogComponent,
    CloseDialogDirective,
    DialogBodyComponent,
    DialogHeaderComponent,
    BackgroundCanvasComponent,
    SpamComponent,
    ArchiveComponent,
    SkeletonComponent,
    NavChipsComponent,
    LinkDisabledDirective,
    MessagesListComponent,
    EmployeeListComponent,
    ScrollTrackerDirective,
    ListItemComponent,
    PopoverDirective,
    PopupComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    PortalModule,
    OverlayModule,
    ImageCropperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
