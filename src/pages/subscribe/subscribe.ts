import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';
import { UserService } from '../../providers/user-service';
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
   myColor: string;
   public i=0;
   
  @ViewChild(Slides) slides: Slides;
  constructor(public navCtrl: NavController, public navParams: NavParams, public userService: UserService) {
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
    
   
    goToSlide(value,value2) {
      if(this.i==1){
        this.subArray.pop();
      }
     	console.log(value);
 			this.userService.getNextLevel(value)
		    .then(data => {
  				console.log(data);
  				this.subArray.push(data['data']);
  			});
      this.i=1;
      this.myColor=value2;
       
    }

    nextSlide(){
      this.slides.lockSwipeToNext(false);
      var cIndex = this.slides.getActiveIndex();
      this.slides.slideTo(cIndex+1,500);
      this.i=0;
      this.slides.lockSwipeToNext(true);
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
