import { Component } from '@angular/core';
import { ModalController } from 'ionic-angular';
import { NavController, NavParams } from 'ionic-angular';
import {DetailPage} from '../detail/detail';
import {AddpostPage} from '../addpost/addpost';
import { UserService } from '../../providers/user-service';
import { Storage } from '@ionic/storage';

/*
  Generated class for the Notiflist page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-notiflist',
  templateUrl: 'notiflist.html',
  providers: [ UserService ]
})
export class NotiflistPage {
  detailpage = DetailPage;
  addpage = AddpostPage;
  start = 0;
  loginStatus:boolean;
  public data =  [];
  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, public userService: UserService,public storage:Storage) {
    this.userService.readPosts('11',0).then(data=>{
      for(var i in data['data']){
        console.log(data['data'][i].header)
        this.data.push({header:data['data'][i].header,description:data['data'][i].description,imageSrc:"https://s3-us-west-1.amazonaws.com/powr/defaults/image-slider2.jpg"});
      }
    });
    this.storage.ready().then(() => {
       this.storage.get('login').then((val) => {
         console.log('log in status', val);
         this.loginStatus=val;
       })
     });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NotiflistPage');
  }

  goToDetail(news){
    console.log(news['header']);
    this.navCtrl.push(this.detailpage,{
      header:news['header'],
      description:news['description'],
      imageSrc:news['imageSrc']
    });

  }
  addPost(addpage){
    this.navCtrl.push(addpage)
  }

  loadMore(){
    this.start=this.start+10;
    this.userService.readPosts('11',this.start).then(data=>{
      for(var i in data['data']){
        console.log(data['data'][i].header)
        this.data.push({header:data['data'][i].header,description:data['data'][i].description,imageSrc:"https://s3-us-west-1.amazonaws.com/powr/defaults/image-slider2.jpg"});
      }
    })
  }

}
