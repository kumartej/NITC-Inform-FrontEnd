import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { SettingsPage } from '../pages/settings/settings';
import { LoginPage } from '../pages/login/login';
import { NotiflistPage } from '../pages/notiflist/notiflist';
import {DetailPage} from '../pages/detail/detail'
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CalendarPage } from '../pages/calendar/calendar';
import { TabsPage } from '../pages/tabs/tabs';
import { AddsubPage } from '../pages/addsub/addsub';
import { AddpostPage } from '../pages/addpost/addpost';
import { UserService } from '../providers/user-service';
import { HTTP } from '@ionic-native/http';
import { SubscribePage } from '../pages/subscribe/subscribe';

@NgModule({
  declarations: [
    MyApp,
    SettingsPage,
    LoginPage,
    AddsubPage,
    TabsPage,
    DetailPage,
    CalendarPage,
   NotiflistPage,
   AddpostPage,
   SubscribePage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
   SettingsPage,
   DetailPage,
   AddsubPage,
   CalendarPage,
   TabsPage,
    LoginPage,
    NotiflistPage,
    AddpostPage,
    SubscribePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserService,
    HTTP
  ]
})
export class AppModule {}
