import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';

import { EmailaddressPage } from '../emailaddress/emailaddress';

/**
 * Generated class for the TermsandconditionsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-termsandconditions',
  templateUrl: 'termsandconditions.html',
})
export class TermsandconditionsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
  }

  agree() {
    this.navCtrl.push(EmailaddressPage);
  }

  disagree() {
    let alert = this.alertCtrl.create({
      title: 'Information',
      subTitle: "Thank you for visiting our Rare Genomics App.HIPAA data protection compliance requires for the user to accept our terms and conditions in order to use it",
      buttons: ['OK']
    });
    alert.present();
  }

}
