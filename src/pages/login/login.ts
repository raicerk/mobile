import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest'

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public rs: RestProvider) {
  }

  signIn() {

    this.rs.post('/signin',{
      email: 'email',
      password: 'password'
    }).then(response=>{
      console.log(response);
    })

    /* let body = this.jsonToURLEncoded({
      email: this.localdata['email'],
      password: this.localdata['password']
    });
    var link = 'https://mobile.raregenomics.org/api/signin';
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' });
    let options = new RequestOptions({
      headers: headers
    });
    this.http.post(link, body, options)
      .subscribe(data => {
        if (data.status == 200) {
          console.log("Login OK");
          this.saveData();
        } else if (data.status == 202) {
          let alert = this.alertCtrl.create({
            title: 'Message',
            subTitle: data.json().message,
            buttons: ['OK']
          });
          alert.present();
        } else if (data.status == 400) {
          let alert = this.alertCtrl.create({
            title: 'Error',
            subTitle: data.json().message,
            buttons: ['OK']
          });
          alert.present();
        }
      }, error => {
        console.log(JSON.stringify(error.json()));
      }); */
  }


  forgotPassword() {
    //this.navCtrl.push(SendResetPasswordEmailPage);
  }

}
