import { Component } from '@angular/core';
import { ModalController } from 'ionic-angular';
import { NavController, NavParams } from 'ionic-angular';
import {DetailPage} from '../detail/detail';
import {AddpostPage} from '../addpost/addpost';

/*
  Generated class for the Notiflist page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-notiflist',
  templateUrl: 'notiflist.html'
})
export class NotiflistPage {
  detailpage = DetailPage;
  addpage = AddpostPage;
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
  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
  
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

}
