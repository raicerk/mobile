import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import GoNFetch from 'go-n-fetch';

/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestProvider {

  gnf: any;

  constructor() {
    this.gnf = GoNFetch({
      baseUrl: 'https://mobile.raregenomics.org/api/'
    })
  }

  post(url: string, data: any) {
    //return new Promise(function (resolve, reject) {
      this.gnf.post(url, {
        body: JSON.stringify(data)
      }).then(response => {
        //resolve(response);
      }).catch(error => {
        //reject(error);
      });
    //})

  }

  get(url: string) {
    return new Promise(function (resolve, reject) {
      this.gnf.get(url).then(response => {
        resolve(response);
      }).catch(error => {
        reject(error);
      })
    })
  }

}
