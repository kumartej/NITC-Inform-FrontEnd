import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { UserService } from '../../providers/user-service';
import { AlertController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
    providers: [ UserService ]
})
export class LoginPage {

	email: string;
	password: string;

  constructor(public loadingCtrl: LoadingController,public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, public alertCtrl: AlertController, public userService: UserService) {

  }

  submitLogin(){
      this.userService.loginUser(this.email,this.password).then((authData) => {
        console.log("LOGGED SUCCESSFULY");
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

  getDummies(){
  	this.userService.getDummy();
  }
}
