import { Component } from '@angular/core';

import { NotiflistPage } from '../notiflist/notiflist';
import { CalendarPage } from '../calendar/calendar';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = NotiflistPage;
  tab2Root: any = CalendarPage;

  constructor() {

  }
}
