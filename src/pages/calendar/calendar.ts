import {Component} from "@angular/core";
import { UserService } from '../../providers/user-service';
import { Storage } from '@ionic/storage';
/*
  Generated class for the Calendar page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-calendar',
  templateUrl: 'calendar.html',
  providers: [ UserService ]
})

export class CalendarPage {
    eventSource;
    viewTitle;
    isToday: boolean;
    calendar = {
        mode: 'month',
        currentDate: new Date()
    }; // these are the variable used by the calendar.
    constructor(public userService: UserService,public storage:Storage){
        this.loadEvents();
    }
    loadEvents() {
        this.eventSource = this.createRandomEvents();
    }
    onViewTitleChanged(title) {
        this.viewTitle = title;
    }
    onEventSelected(event) {
        console.log('Event selected:' + event.startTime + '-' + event.endTime + ',' + event.title);
    }
    changeMode(mode) {
        this.calendar.mode = mode;
    }
    today() {
        this.calendar.currentDate = new Date();
    }
    onTimeSelected(ev) {
        console.log('Selected time: ' + ev.selectedTime + ', hasEvents: ' +
            (ev.events !== undefined && ev.events.length !== 0) + ', disabled: ' + ev.disabled);
    }
    onCurrentDateChanged(event:Date) {
        var today = new Date();
        today.setHours(0, 0, 0, 0);
        event.setHours(0, 0, 0, 0);
        this.isToday = today.getTime() === event.getTime();
    }
    createRandomEvents() {
        var events=[];
        try{
            var userkey;
            this.storage.ready().then(() => {
               this.storage.get('user').then((val) => {
                 console.log('log in status', val);
                 userkey=val;
                 console.log("userKey:::"+userkey);
                this.userService.readCalendarEvents(userkey).then(data=>{
                  for(var i in data['data']){
                    events.push({title:data['data'][i].title,
                        startTime:new Date(data['data'][i].startTime),
                        endTime:new Date(data['data'][i].endTime),
                        allDay: data['data'][i].allDay
                    });
                  }
                });
               })
             });
            console.log(events);
            return events;
        }catch(ex){
            console.log('Error','In CreateRandomEvents::'+ex);
            return events;
        }
    }
    onRangeChanged(ev) {
        console.log('range changed: startTime: ' + ev.startTime + ', endTime: ' + ev.endTime);
    }
    markDisabled = (date:Date) => {
        var current = new Date();
        current.setHours(0, 0, 0);
        return date < current;
    };
}

