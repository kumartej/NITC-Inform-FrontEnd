import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { AddsubPage } from '../addsub/addsub';

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {
	subpage=AddsubPage;

  constructor(public navCtrl: NavController) {

  }

gotopage(){
    this.navCtrl.push(AddsubPage);

  }
}
