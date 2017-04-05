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
<<<<<<< HEAD
import { UserService } from '../providers/user-service';
import { HTTP } from '@ionic-native/http';
import { SubscribePage } from '../pages/subscribe/subscribe';
=======

>>>>>>> c09b1e8d18c98acfda7e980fa8155bdecde9bd93

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
<<<<<<< HEAD
   AddpostPage,
   SubscribePage
=======
   AddpostPage
>>>>>>> c09b1e8d18c98acfda7e980fa8155bdecde9bd93
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
<<<<<<< HEAD
    AddpostPage,
    SubscribePage
=======
    AddpostPage
>>>>>>> c09b1e8d18c98acfda7e980fa8155bdecde9bd93
  ],
  providers: [
    StatusBar,
    SplashScreen,
<<<<<<< HEAD
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserService,
    HTTP
=======
    {provide: ErrorHandler, useClass: IonicErrorHandler}
>>>>>>> c09b1e8d18c98acfda7e980fa8155bdecde9bd93
  ]
})
export class AppModule {}
