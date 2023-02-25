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
import {OverlayModule} from "@angular/cdk/overlay";
import { SelectComponent } from '@components/ui/select/select.component';
import { SelectChipComponent } from '@components/ui/select-chip/select-chip.component';
import { SidebarComponent } from '@components/ui/sidebar/sidebar.component';
import { SearchComponent } from '@components/ui/search/search.component';
import { ChatsComponent } from '@pages/chats/chats.component';
import { ProfileComponent } from '@app/pages/profile/profile.component';
import { SettingsComponent } from '@pages/settings/settings.component';
import { AnalyticsComponent } from '@pages/analytics/analytics.component';
import { FriendsPageComponent } from '@pages/friends-page/friends-page.component';
import { ToggleUncoverDirective } from '@directives/toggle-uncover.directive';
import { LetDirective } from './directives/let.directive';

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
    LetDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    PortalModule,
    OverlayModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
