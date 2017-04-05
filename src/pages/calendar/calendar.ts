<<<<<<< HEAD
import {Component} from "@angular/core";
import { NavController} from 'ionic-angular';
import {Calendar} from 'ionic-native';
=======
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Calendar} from '@ionic-native/calendar';

>>>>>>> c09b1e8d18c98acfda7e980fa8155bdecde9bd93
/*
  Generated class for the Calendar page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-calendar',
  templateUrl: 'calendar.html'
})
<<<<<<< HEAD

export class CalendarPage {
  public title: string;
  public note: string;
  public startDate: Date;
  public endDate: Date;
  public titleUpdated: string;
  public noteUpdated: string;
  private nav: NavController;
  constructor(nav: NavController) {

    this.nav = nav;

    this.title = 'Event 1';
    this.note = 'Creating an event !';
    this.startDate = new Date();
    this.startDate.setMinutes(this.startDate.getMinutes() + 10);
    this.endDate = new Date();
    this.endDate.setHours(this.startDate.getHours() + 1);

    this.titleUpdated = 'Event updated';
    this.noteUpdated = 'We update the event !';
  }
  ionViewDidLoad()
  {
    Calendar.listCalendars();
  }
}
 
=======
export class CalendarPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private calendar: Calendar) { 
  	this.calendar.createCalendar('MyCalendar').then(
	  (msg) => { console.log(msg); },
	  (err) => { console.log(err); }
	);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CalendarPage');
  }

  addToCalendar(){
  	console.log("addToCalendar");
  }

}
>>>>>>> c09b1e8d18c98acfda7e980fa8155bdecde9bd93
