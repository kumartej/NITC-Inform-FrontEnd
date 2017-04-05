import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
<<<<<<< HEAD
import { SubscribePage } from '../subscribe/subscribe';
=======
import { AddsubPage } from '../addsub/addsub';
>>>>>>> c09b1e8d18c98acfda7e980fa8155bdecde9bd93

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {
<<<<<<< HEAD
=======
	subpage=AddsubPage;
>>>>>>> c09b1e8d18c98acfda7e980fa8155bdecde9bd93

  constructor(public navCtrl: NavController) {

  }

gotopage(){
<<<<<<< HEAD
    this.navCtrl.push(SubscribePage);
=======
    this.navCtrl.push(AddsubPage);
>>>>>>> c09b1e8d18c98acfda7e980fa8155bdecde9bd93

  }
}
