import { FavService } from './../../services/favservice';
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
    update: boolean;
    oldPassItem: {title, passportNum, name, expiry_date};

    constructor(private viewCtrl: ViewController,
              private passItem: Passwords,
              private loginService: LoginService,
              private navParams: NavParams,
              private favService: FavService){      
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PassportPage');
    this.update = false;
    this.pageTitle = this.navParams.get("pageTitle");
    if(this.navParams.get("passItem")){
      this.oldPassItem = this.navParams.get("passItem");
      this.update = this.navParams.get("update");
      this.title = this.oldPassItem.title;
      this.passportNum = this.oldPassItem.passportNum;
      this.name = this.oldPassItem.name; 
      this.expiry_date = this.oldPassItem.expiry_date;
    }
  }

  onSave(){
    if(this.update){
      this.loginService.updatePassItem(
        this.oldPassItem,
        {
          title: this.title,
          passportNum: this.passportNum,
          name: this.name,
          expiry_date: this.expiry_date
        },
        this.pageTitle
      );
      this.favService.updateFavourites(
        this.oldPassItem,
        {
          title: this.title,
          passportNum: this.passportNum,
          name: this.name,
          expiry_date: this.expiry_date
        }
      );
      this.viewCtrl.dismiss(
        {
          title: this.title,
          passportNum: this.passportNum,
          name: this.name,
          expiry_date: this.expiry_date
        }
      );
    } else {
      this.loginService.addPassItem({
        title: this.title,
        passportNum: this.passportNum,
        name: this.name,
        expiry_date: this.expiry_date
      }, this.pageTitle);
    }
    // console.log(this.passItem);
    this.onCancel();
  }

  onCancel(){
    this.viewCtrl.dismiss();
  }
}