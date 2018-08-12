import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { LoginPage } from '../login/login';

/**
 * Generated class for the EmailaddressPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-emailaddress',
  templateUrl: 'emailaddress.html',
})
export class EmailaddressPage {

  localdata = {};

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.localdata['email'] = 'res.rows.item(i).email';
    this.localdata['emailexist'] = true;
  }

  ionViewDidLoad() {
  }

  checkEmail() {   
    /* let body = this.jsonToURLEncoded({
      email: this.localdata['email']
    });
    var link = 'https://mobile.raregenomics.org/api/checkemail';
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' });
    let options = new RequestOptions({
      headers: headers
    });
    this.http.post(link, body, options)
      .subscribe(data => {
        if (data.status == 201) {          
          this.saveData();
        } else if (data.status == 202) { */
          this.navCtrl.push(LoginPage);
       /*  }
      }, error => {
        console.log(JSON.stringify(error.json()));
      }); */
  }


}
