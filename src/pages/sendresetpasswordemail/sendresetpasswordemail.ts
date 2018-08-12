import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SendresetpasswordemailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-sendresetpasswordemail',
  templateUrl: 'sendresetpasswordemail.html',
})
export class SendresetpasswordemailPage {

  private email;
  private emailNotFound = true;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
  }

  sendResetPasswordLink() {
    /* if (this.email == undefined) {
      const alert = this.alertCtrl.create({
        title: 'Message',
        subTitle: "Please type your email",
        buttons: ['OK']
      });

      alert.present();
    } else {
      const url = 'https://mobile.raregenomics.org/api/sendResetPasswordEmail';
      const headers = new Headers({
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
      });
      const options = new RequestOptions({
        headers
      });
      const body = "email=" + this.email;

      this.http.post(url, body, options).subscribe(data => {
        if (data.status == 200) {
          if (data.json().userExists) {
            const alert = this.alertCtrl.create({
              title: 'Message',
              subTitle: 'Please check your registered email for the reset password link',
              buttons: ['OK']
            });

            alert.present();
            this.navCtrl.pop();
          } else {
            this.emailNotFound = false;
          }
        }
      }, error => {
        const alert = this.alertCtrl.create({
          title: 'Error',
          subTitle: error.json().message,
          buttons: ['OK']
        });

        alert.present();
      });
    } */
  }


  closeWindow() {
    this.navCtrl.pop();
  }

}
