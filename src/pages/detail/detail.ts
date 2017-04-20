import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the Detail page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html'
})
export class DetailPage {

	public header:any
	public description:any
	public imageSrc:any
  public venue: any;
  public posted_by: any;
  public post_time: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.header = navParams.get('header');
  	this.description = navParams.get('description');
  	this.imageSrc = navParams.get('imageSrc');
    this.venue = navParams.get('venue'); 
    this.posted_by = navParams.get('posted_by');
    this.post_time = navParams.get('post_time');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPage');
  }

}
