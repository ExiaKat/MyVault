import { LoginService } from './../../services/login';
import { Passwords } from './../../interface/passwords';
import { ViewController, NavParams } from 'ionic-angular';
import { Component } from '@angular/core';

@Component({
    selector: 'page-email',
    templateUrl: 'email.html'
})
export class EmailPage {
    title: string;
    pageTitle: string;
    emailadd: string;
    emailpass: string;
    
    constructor(
        private viewCtrl: ViewController,
        private passItem: Passwords,
        private loginService: LoginService,
        private navParams: NavParams
    ){}
    ionViewDidLoad() {  
    console.log('ionViewDidLoad EmailPage');
    this.pageTitle = this.navParams.get("pageTitle");
    // this.passItem = this.loginService.getPassObject();
    }

  onSave(){
    //Todo: save user's input and close the modal    
    this.loginService.addPassItem({
      title: this.title,
      emailadd: this.emailadd,
      emailpass: this.emailpass
    }, this.pageTitle);
    // console.log(this.passItem);
    this.onCancel();
  }

  onCancel(){
    this.viewCtrl.dismiss();
  }
}
