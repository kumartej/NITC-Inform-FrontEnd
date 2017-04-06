import { Component } from '@angular/core';
import { ModalController } from 'ionic-angular';
import { NavController, NavParams } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';
import { UserService } from '../../providers/user-service';
import { LoginPage } from '../login/login';
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
   
   public subArray = [];
   public i=0;
   public checkLogin=0;
   public checkLeaf=0;
   
  @ViewChild(Slides) slides: Slides;
  constructor(public navCtrl: NavController, public navParams: NavParams, public userService: UserService,public modalCtrl: ModalController) {
		this.userService.getNextLevel('1')
		.then(data => {
			console.log(data);
			this.subArray.push(data['data']);
		})
  	this.i=0;
  }
 
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad SubscribePage');
    this.slides.lockSwipeToNext(true);
    this.slides.lockSwipeToPrev(true);
  }
    
   
    goToSlide(value) {
      if(this.i==1){
        this.subArray.pop();
      }
      console.log(value);
      if(value == 'login')
        this.checkLogin=1;
      else if(value == 'leaf')
        this.checkLeaf=1;
      else{
        this.checkLeaf=0;
        this.checkLogin=0;
 			this.userService.getNextLevel(value)
		    .then(data => {
  				console.log(data);
  				this.subArray.push(data['data']);
  			});
      this.i=1;
     }
    }

    nextSlide(){
      if(this.checkLogin == 1){
        let modal = this.modalCtrl.create(LoginPage);
         modal.present();
         this.checkLogin=0;
      }
      else if(this.checkLeaf == 1){
        this.navCtrl.pop();
         this.checkLeaf=0;
      }
      else{
      this.slides.lockSwipeToNext(false);
      var cIndex = this.slides.getActiveIndex();
      this.slides.slideTo(cIndex+1,500);
      this.i=0;
      this.slides.lockSwipeToNext(true);
      }
    }
    
    popSlide(){
    	this.slides.lockSwipeToPrev(false);
      var cIndex = this.slides.getActiveIndex();
      console.log(cIndex);
      if(cIndex!=0){
        this.slides.slideTo(cIndex-1,500);
        this.subArray.pop();
      }
      this.slides.lockSwipeToPrev(true);
    }
  }
