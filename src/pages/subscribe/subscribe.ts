import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { UserService } from '../../providers/user-service';
import { LoginPage } from '../login/login';
import { Storage } from '@ionic/storage';
import { TabsPage } from '../tabs/tabs';
/*
  Generated class for the Subscribe page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-subscribe',
  templateUrl: 'subscribe.html',
    providers: [ UserService ]
})
export class SubscribePage {
  loginStatus:boolean;
  constructor(public navCtrl: NavController, public navParams: NavParams,public storage: Storage){
    this.storage.ready().then(() => {
          this.storage.get('login').then((val) => {
            console.log('Your age is', val);
            this.loginStatus=val;
          });
        });

  };
   selectedFac(){
     this.navCtrl.push(LoginPage, {
     id: '2'
    });
   }
   selectedStaff(){
     this.navCtrl.push(LoginPage, {
     id: '3'
  });
   }
   submitLogout()
  {
    this.storage.ready().then(() => {

          this.storage.set('login', false);

          // Or to get a key/value pair
          this.storage.get('login').then((val) => {
            console.log('Your age is', val);
            this.loginStatus=val;
          });
        });
    this.loginStatus=false;
   this.navCtrl.popToRoot();
   this.navCtrl.setRoot(TabsPage);
  }
}
