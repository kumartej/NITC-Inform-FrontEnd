import { Component } from '@angular/core';
import { ModalController } from 'ionic-angular';
import { NavController, NavParams } from 'ionic-angular';
import {DetailPage} from '../detail/detail';
import {AddpostPage} from '../addpost/addpost';
import { UserService } from '../../providers/user-service';

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
  public data =  [
  {
    header:"header1 ",
    description:"des1",
    imageSrc:"https://s3-us-west-1.amazonaws.com/powr/defaults/image-slider2.jpg"

  },
  {
    header:"header2 ",
    description:"des2",
    imageSrc:"https://s3-us-west-1.amazonaws.com/powr/defaults/image-slider2.jpg"


  },
  {
    header:"header2 ",
    description:"des2",
    imageSrc:"https://s3-us-west-1.amazonaws.com/powr/defaults/image-slider2.jpg"

  }
  ];
  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, public userService: UserService) {
    this.userService.readPosts('11',0).then(data=>{
      for(var i in data['data']){
        console.log(data['data'][i].header)
        this.data.push({header:data['data'][i].header,description:data['data'][i].description,imageSrc:"https://s3-us-west-1.amazonaws.com/powr/defaults/image-slider2.jpg"});
      }
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
