import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { LoginPage } from '../login/login';
import { TermsandconditionsPage } from '../termsandconditions/termsandconditions';

/**
 * Generated class for the StartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-start',
  templateUrl: 'start.html',
})
export class StartPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  createAccount() {
    this.navCtrl.push(TermsandconditionsPage);
  }

  gotoLogin() {
    this.navCtrl.setRoot(LoginPage);
  }

}
