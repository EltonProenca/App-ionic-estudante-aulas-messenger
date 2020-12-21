import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


import { AuthService } from './../providers/auth.service';


import { User } from './../models/user.model';
import { UserService } from './../providers/user.service';

import * as firebase from 'firebase/app';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage:any = "SigninPage";
  pages: Array<{title: string, component: any}>;
  currentUser: User;


  constructor(
    authService: AuthService,
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    userService: UserService
  ) {

    localStorage.removeItem('firebase:previous_websocket_failure');

    authService
      .afAuth
      .authState
      .subscribe((authUser: firebase.User) => {

        if (authUser) {

          this.rootPage = "HomePage";


          userService.currentUser
            .valueChanges()
            .subscribe((user: User) => {
              this.currentUser = user;
            });






        } else {

          this.rootPage = "SigninPage";

        }

      });

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

      this.nav.setRoot("HomePage");


    });
  }
  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
