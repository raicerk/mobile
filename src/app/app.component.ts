import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { StartPage } from '../pages/start/start';
import { HomePage } from '../pages/home/home';
import { ProfileviewPage } from '../pages/profileview/profileview';
import { RaresharePage } from '../pages/rareshare/rareshare';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = StartPage;

  pages: Array<{ title: string, component: any }>;
  rgiMenuItems: Array<{ title: string, component: any }>;
  settingsMenuItems: Array<{ title: string, component: any }>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    this.pages = [
      { title: 'Home', component: HomePage},
      { title: 'My Profile', component: ProfileviewPage },
      { title: 'Rareshare', component: RaresharePage },
      //{ title: 'Get a Diagnosis - RareREACH', component: RarereachPage }
    ];

    this.rgiMenuItems = [
      //{ title: 'Contact Us.', component: ContactRGIPage }
    ];

    this.settingsMenuItems = [
      //{ title: 'Terms and Conditions', component: TermsandconditionsPage },
      //{ title: 'Privacy Policy', component: RarereachPage },
      //{ title: 'My Settings', component: MySettingsPage },
      //{ title: 'Support & Feedback', component: SupportAndFeedbackPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
