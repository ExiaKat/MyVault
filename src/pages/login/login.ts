import { Passwords } from './../../interface/passwords';
import { LoginService } from './../../services/login';

import { Component } from '@angular/core';
import { ViewController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  
  title : string;
  username: string;
  password: string;
  pageTitle: string

  constructor(private viewCtrl: ViewController,
              private passItem: Passwords,
              private loginService: LoginService,
              private navParams: NavParams){      
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
    this.pageTitle = this.navParams.get("pageTitle");
    this.passItem = this.loginService.getPassObject();
  }

  onSave(){
    //Todo: save user's input and close the modal    
    this.loginService.addPassItem({
      title: this.title,
      username: this.username,
      password: this.password
    }, this.pageTitle);
    console.log(this.passItem);
    this.onCancel();
  }

  onCancel(){
    this.viewCtrl.dismiss(this.passItem.logins);
  }
}
