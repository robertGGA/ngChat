import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ChatComponent} from "@pages/chat/chat.component";
import {MainComponent} from "@pages/main/chats-page.component";
import {ChatsComponent} from "@pages/chats/chats.component";
import {SettingsComponent} from "@pages/settings/settings.component";
import {ProfileComponent} from "@pages/profile/profile.component";
import {AnalyticsComponent} from "@pages/analytics/analytics.component";
import {FriendsPageComponent} from "@pages/friends-page/friends-page.component";
import {ArchiveComponent} from "@pages/chats/components/archive/archive.component";
import {SpamComponent} from "@pages/chats/components/spam/spam.component";

const routes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'chats',
    component: ChatsComponent,
    children: [
      {
        path: 'archive',
        component: ArchiveComponent
      },
      {
        path: 'spam',
        component: SpamComponent
      }
    ]
  },
  {
    path: 'settings',
    component: SettingsComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'analytics',
    component: AnalyticsComponent
  },
  {
    path: 'chat/:id',
    component: ChatComponent
  },
  {
    path: 'friends',
    component: FriendsPageComponent
  }];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
