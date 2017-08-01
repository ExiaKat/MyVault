import { LoginService } from './../../services/login';
import { Passwords } from './../../interface/passwords';
import { ViewController, NavParams } from 'ionic-angular';
import { Component } from '@angular/core';

@Component({
    selector: 'page-passport',
    templateUrl: 'passport.html'
})
export class PassportPage {
    title: string;
    passportNum: string;
    name: string;
    expiry_date: string;
    pageTitle: string;

    constructor(private viewCtrl: ViewController,
              private passItem: Passwords,
              private loginService: LoginService,
              private navParams: NavParams){      
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PassportPage');
    this.pageTitle = this.navParams.get("pageTitle");
    this.passItem = this.loginService.getPassObject();
  }

  onSave(){
    //Todo: save user's input and close the modal    
    this.loginService.addPassItem({
      title: this.title,
      passportNum: this.passportNum,
      name: this.name,
      expiry_date: this.expiry_date
    }, this.pageTitle);
    console.log(this.passItem);
    this.onCancel();
  }

  onCancel(){
    this.viewCtrl.dismiss(this.passItem.passports);
  }
}