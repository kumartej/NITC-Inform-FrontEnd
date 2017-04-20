import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { UserService } from '../../providers/user-service';
import { AlertController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { TabsPage } from '../tabs/tabs';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
    providers: [ UserService ]
})
export class LoginPage {

	email: string;
  error: string;
  id:string;
	password: string;
  public userDetails=[];
  loginStatus:boolean;

  constructor(public loadingCtrl: LoadingController,public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, public alertCtrl: AlertController, public userService: UserService,public storage: Storage) {

    this.storage.ready().then(() => {
          this.storage.get('login').then((val) => {
            console.log('Your age is', val);
            this.loginStatus=val;
          });
        });
    this.error='';
    this.id=navParams.get('id');
  }

  submitLogin(){
      this.userService.loginUser(this.email,this.password).then((authData) => {
        console.log("LOGGED SUCCESSFULY");
        this.storage.ready().then(() => {

          this.storage.set('email', this.email);
          this.storage.set('login', true);
          if (this.id=='2' || this.id=='3') {
            this.storage.set('user',this.id);
          }
          else
          {
            this.storage.set('user','1');
          }

          // Or to get a key/value pair
          this.storage.get('login').then((val) => {
            console.log('Your age is', val);
            this.loginStatus=val;
          });
        });
        this.navCtrl.popToRoot();
        this.navCtrl.setRoot(TabsPage);
      
      },error => {
        let alert = this.alertCtrl.create({
          title: 'Invalid Login!',
          subTitle: error.message,
          buttons: ['OK']
        });
        alert.present();
      });

      let loader = this.loadingCtrl.create({
        // dismissOnPageChange : true,
        content: "Please wait...",
        duration: 3000
      });
      loader.present();
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
   this.navCtrl.setRoot(this.navCtrl.getActive().component);
  }

  getDummies(){
  	this.userService.getDummy();
  }
}
