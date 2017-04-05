import { Component } from '@angular/core';
<<<<<<< HEAD
import { NavController, NavParams} from 'ionic-angular';
import { ModalController } from 'ionic-angular';

//import { UsersService } from '../../providers/users-service';
=======
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
//import { UsersService } from '../../providers/users-service';
import { AlertController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
>>>>>>> c09b1e8d18c98acfda7e980fa8155bdecde9bd93
/*
  Generated class for the Addpost page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-addpost',
  templateUrl: 'addpost.html',
})
export class AddpostPage {

	header: any;
	description: any;
	postedBy: any;
<<<<<<< HEAD
 

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
  }

 
=======

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
  
  }

>>>>>>> c09b1e8d18c98acfda7e980fa8155bdecde9bd93
  ionViewDidLoad() {
    console.log('ionViewDidLoad AddpostPage');
  }

  closeAddPost(){
  	//this.viewCtrl.dismiss();
  }

  addPost(){
  	 console.log("header:::"+this.header+"description:::"+this.description+"postedBy:::"+this.postedBy);
  	
  }
}
