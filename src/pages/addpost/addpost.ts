import { Component } from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { UserService } from '../../providers/user-service';
import { AlertController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';

//import { UsersService } from '../../providers/users-service';
/*
  Generated class for the Addpost page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-addpost',
  templateUrl: 'addpost.html',
  providers: [ UserService ]
})
export class AddpostPage {

	header: any;
	description: any;
	postedBy: any;
  myTime:any;
  venue:any;
  toppings:any;
  test=1;

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController,public userService: UserService,public loadingCtrl: LoadingController,public alertCtrl: AlertController) {
  }

 
  ionViewDidLoad() {
    console.log('ionViewDidLoad AddpostPage');
  }

  closeAddPost(){
  	//this.viewCtrl.dismiss();
  }

  addPost(){
      var sum = 0,check=0;
      for(var i in this.toppings){
        sum+=parseInt(this.toppings[i])
        check+=1;
      }
      if(check>1)
        sum+=1;
       console.log("header:::"+this.header+"description:::"+this.description+"postedBy:::"+this.postedBy);
       var dateU = new Date(this.myTime).toUTCString();
       console.log(dateU);
       this.userService.writePosts(this.header,this.description,this.postedBy,dateU,this.venue,sum).then(data =>{
          console.log("ADDED SUCCESSFULLY"+data);
          //this.navCtrl.pop();
          this.navCtrl.popToRoot();
          this.navCtrl.setRoot(TabsPage);
       },error => {
          let alert = this.alertCtrl.create({
            title: 'Something Went Wrong',
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
}
