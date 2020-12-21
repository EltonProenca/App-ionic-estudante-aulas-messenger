import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,  AlertController } from 'ionic-angular';
import { Calendar } from '@ionic-native/calendar';
import { Platform } from 'ionic-angular';
import { CalendarService } from '../../providers/calendar/calendar.service';

@IonicPage()
@Component({
  selector: 'page-calendario',
  templateUrl: 'calendario.html',
})
export class CalendarioPage {
  date: any;
  daysInThisMonth: any;
  daysInLastMonth: any;
  daysInNextMonth: any;
  monthNames: string[];
  currentMonth: any;
  currentYear: any;
  currentDate: any;
  eventList: any;
  selectedEvent: any;
  isSelected: any;

  public items;
  public isApp: boolean;
  public date2 = new Date();

  constructor(private alertCtrl: AlertController,
      public navCtrl: NavController,
      public navParams: NavParams,
      private calendar: Calendar,
      private platform: Platform,
      private calendarService: CalendarService) { }

      ionViewDidLoad() {
        console.log('ionViewDidLoad EventListPage');
        this.checkPlatform();
      }

      itemSelected(item: any) {
      }

      checkPlatform() {
        if (this.platform.is('core') || this.platform.is('mobileweb')) {
          this.isApp = false;
          this.items = this.getMockEventsList();
          console.log(this.items);
        } else {
          this.isApp = true;
          this.loadEventListData();
        }
      }


    getMockEventsList() {
      return [{
        'calendar_id': '1',
        'title': 'test1',
        'dtstart': '21356',
        'dtend': '13213',
        'eventLocation': 'pune'
      },
      {
        'calendar_id': '1',
        'title': 'test2',
        'dtstart': '21356',
        'dtend': '13213',
        'eventLocation': 'pune'
      },
      {
        'calendar_id': '1',
        'title': 'test3',
        'dtstart': '21356',
        'dtend': '13213',
        'eventLocation': 'nasik'
      },
      {
        'calendar_id': '1',
        'title': 'test4',
        'dtstart': '21356',
        'dtend': '13213',
        'eventLocation': 'mumbai'
      },
      {
        'calendar_id': '1',
        'title': 'test5',
        'dtstart': '21356',
        'dtend': '13213',
        'eventLocation': 'pune'
      },
      {
        'calendar_id': '2',
        'title': 'test6',
        'dtstart': '21356',
        'dtend': '13213',
        'eventLocation': 'pune'
      }]
    }


    loadEventListData() {
          this.calendarService.loadEventListData(this.date2).then(data => {
            this.items = data;
          });
        }


    /*  deleteEvent(item: any) {
            if (this.isApp) {
              this.calendar.deleteEvent(item.title, item.eventLocation, '', new Date2(item.dtstart), new Date2(item.dtend)).then(data => {
                this.loadEventListData();
              });

            } else {
              for (let i = 0; i < this.items.length; i++) {

                if (this.items[i] == item) {
                  this.items.splice(i, 1);
                }

              }
            }
          }*/

  editEvent(item: any) {
      alert(JSON.stringify(item));
      this.navCtrl.push("AddEventPage", item);
    }

////////////////////////////////////////////////////////////////////////////////////////////////////////

  ionViewWillEnter() {
    this.date = new Date();
    this.monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    this.getDaysOfMonth();
    this.loadEventThisMonth();
  }

    getDaysOfMonth() {
      this.daysInThisMonth = new Array();
      this.daysInLastMonth = new Array();
      this.daysInNextMonth = new Array();
      this.currentMonth = this.monthNames[this.date.getMonth()];
      this.currentYear = this.date.getFullYear();
      if (this.date.getMonth() === new Date().getMonth()) {
        this.currentDate = new Date().getDate();
      } else {
        this.currentDate = 999;
      }

      var firstDayThisMonth = new Date(this.date.getFullYear(), this.date.getMonth(), 1).getDay();
      var prevNumOfDays = new Date(this.date.getFullYear(), this.date.getMonth(), 0).getDate();
      for (var i = prevNumOfDays - (firstDayThisMonth - 1); i <= prevNumOfDays; i++) {
        this.daysInLastMonth.push(i);
      }

      var thisNumOfDays = new Date(this.date.getFullYear(), this.date.getMonth() + 1, 0).getDate();
      for (var j = 0; j < thisNumOfDays; j++) {
        this.daysInThisMonth.push(j + 1);
      }

      var lastDayThisMonth = new Date(this.date.getFullYear(), this.date.getMonth() + 1, 0).getDay();
     // var nextNumOfDays = new Date(this.date.getFullYear(), this.date.getMonth()+2, 0).getDate();
      for (var k = 0; k < (6 - lastDayThisMonth); k++) {
        this.daysInNextMonth.push(k + 1);
      }
      var totalDays = this.daysInLastMonth.length + this.daysInThisMonth.length + this.daysInNextMonth.length;
      if (totalDays < 36) {
        for (var l = (7 - lastDayThisMonth); l < ((7 - lastDayThisMonth) + 7); l++) {
          this.daysInNextMonth.push(l);
        }
      }
    }

    goToLastMonth() {
      this.date = new Date(this.date.getFullYear(), this.date.getMonth(), 0);
      this.getDaysOfMonth();
    }

    goToNextMonth() {
      this.date = new Date(this.date.getFullYear(), this.date.getMonth() + 2, 0);
      this.getDaysOfMonth();
    }

    addEvent() {
      this.navCtrl.push("AddEventPage");
    }

    showEventsList() {
      this.navCtrl.push("EventListPage");
    }

    loadEventThisMonth() {
      this.eventList = new Array();
      var startDate = new Date(this.date.getFullYear(), this.date.getMonth(), 1);
      var endDate = new Date(this.date.getFullYear(), this.date.getMonth() + 1, 0);
      this.calendar.listEventsInRange(startDate, endDate).then(
        (msg) => {
          msg.forEach(item => {
            this.eventList.push(item);
          });
        },
        (err) => {
          console.log(err);
        }
      );
    }

    checkEvent(day) {
      var hasEvent = false;
      var thisDate1 = this.date.getFullYear() + "-" + (this.date.getMonth() + 1) + "-" + day + " 00:00:00";
      var thisDate2 = this.date.getFullYear() + "-" + (this.date.getMonth() + 1) + "-" + day + " 23:59:59";
      this.eventList.forEach(event => {
        if (((event.startDate >= thisDate1) && (event.startDate <= thisDate2)) || ((event.endDate >= thisDate1) && (event.endDate <= thisDate2))) {
          hasEvent = true;
        }
      });
      return hasEvent;
    }

    selectDate(day) {
      this.isSelected = false;
      this.selectedEvent = new Array();
      var thisDate1 = this.date.getFullYear() + "-" + (this.date.getMonth() + 1) + "-" + day + " 00:00:00";
      var thisDate2 = this.date.getFullYear() + "-" + (this.date.getMonth() + 1) + "-" + day + " 23:59:59";
      this.eventList.forEach(event => {
        if (((event.startDate >= thisDate1) && (event.startDate <= thisDate2)) || ((event.endDate >= thisDate1) && (event.endDate <= thisDate2))) {
          this.isSelected = true;
          this.selectedEvent.push(event);
        }
      });
    }

    /*
    deleteEvent(evt) {
      // console.log(new Date(evt.startDate.replace(/\s/, 'T')));
      // console.log(new Date(evt.endDate.replace(/\s/, 'T')));
      let alert = this.alertCtrl.create({
        title: 'Confirm Delete',
        message: 'Gostaria de Apagar esta data no calendário?',
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            handler: () => {
              console.log('Cancel clicked');
            }
          },
          {
            text: 'Ok',
            handler: () => {
              this.calendar.deleteEvent(evt.title, evt.location, evt.notes, new Date(evt.startDate.replace(/\s/, 'T')), new Date(evt.endDate.replace(/\s/, 'T'))).then(
                (msg) => {
                  console.log(msg);
                  this.loadEventThisMonth();
                  this.selectDate(new Date(evt.startDate.replace(/\s/, 'T')).getDate());
                },
                (err) => {
                  console.log(err);
                }
              )
            }
          }
        ]
      });
      alert.present();
    }*/


    deleteEvent(item: any) {
        let alert = this.alertCtrl.create({
        title: 'Confirm Delete',
        message: 'Gostaria de Apagar esta data no calendário?',
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            handler: () => {
              console.log('Cancel clicked');
            }
          },
          {
            text: 'Ok',
            handler: () => {
              if (this.isApp) {
                this.calendar.deleteEvent(item.title, item.eventLocation, '', new Date(item.dtstart), new Date(item.dtend)).then(data => {
                  this.loadEventListData();
                });

              } else {
                for (let i = 0; i < this.items.length; i++) {

                  if (this.items[i] == item) {
                    this.items.splice(i, 1);
                  }

                }
              }
            }
          }
        ]
      });
      alert.present();
    }
  }
