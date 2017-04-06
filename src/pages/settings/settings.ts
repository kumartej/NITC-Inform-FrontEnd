import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { SubscribePage } from '../subscribe/subscribe';

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {

  constructor(public navCtrl: NavController) {

  }

gotopage(){
    this.navCtrl.push(SubscribePage);

  }
}
