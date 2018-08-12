import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ProfileviewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-profileview',
  templateUrl: 'profileview.html',
})
export class ProfileviewPage {

  profileView = {};

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.profileView['name'] = 'res.rows.item(i).firstname';
    this.profileView['story'] = 'res.rows.item(i).mystory';
    this.profileView['updates'] = 'res.rows.item(i).myupdates';
    this.profileView['image'] = 'res.rows.item(i).picture';
  }

  ionViewDidLoad() {
  }

}
