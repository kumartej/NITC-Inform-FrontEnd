import { Component, ViewChild } from '@angular/core';

import { Platform, MenuController, Nav } from 'ionic-angular';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SettingsPage } from '../pages/settings/settings';
import { LoginPage } from '../pages/login/login';
import { NotiflistPage } from '../pages/notiflist/notiflist';
import { TabsPage } from '../pages/tabs/tabs';
import * as firebase from 'firebase'

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  // make HelloIonicPage the root (or first) page
  rootPage = TabsPage;
  pages: Array<{title: string, component: any}>;

  constructor( public platform: Platform, public menu: MenuController, public statusBar: StatusBar, public splashScreen: SplashScreen ) {
    var config = {
      apiKey: "AIzaSyAI8FYxeIHmNtc_wOrT2om2Y2pTVt84okc",
      authDomain: "ionicfirebase-9f74c.firebaseapp.com",
      databaseURL: "https://ionicfirebase-9f74c.firebaseio.com",
      storageBucket: "ionicfirebase-9f74c.appspot.com",
      messagingSenderId: "551753528694"
    };
    firebase.initializeApp(config);

    this.initializeApp();

    // set our app's pages
    this.pages = [
      { title: 'Notifications', component: NotiflistPage },
      { title: 'login', component: LoginPage },
      { title: 'settings',component:SettingsPage}
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
    if(page.component==NotiflistPage) {
      this.nav.setRoot(TabsPage);
    }
  }
}
