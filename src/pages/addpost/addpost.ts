import { Component } from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';
import { ModalController } from 'ionic-angular';

//import { UsersService } from '../../providers/users-service';
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
 

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
  }

 
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
