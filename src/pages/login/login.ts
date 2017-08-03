import { FavService } from './../../services/favservice';
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
  pageTitle: string;
  update: boolean;
  oldPassItem: {title, username, password};

  constructor(private viewCtrl: ViewController,
              private passItem: Passwords,
              private loginService: LoginService,
              private navParams: NavParams,
              private favService: FavService){      
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
    this.update = false;
    this.pageTitle = this.navParams.get("pageTitle");
    if(this.navParams.get("passItem")){
      this.oldPassItem = this.navParams.get("passItem");
      this.update = this.navParams.get("update");
      this.title = this.oldPassItem.title;
      this.username = this.oldPassItem.username;
      this.password = this.oldPassItem.password;
    }
    //this.passItem = this.loginService.getPassObject();
  }

  onSave(){
    //Todo: save user's input and close the modal  
    if(this.update){
      this.loginService.updatePassItem(
        this.oldPassItem, 
        {
          title: this.title,
          username: this.username,
          password: this.password
        },
        this.pageTitle);
        this.favService.updateFavourites(
          this.oldPassItem,{
            title: this.title,
            username: this.username,
            password: this.password
          }
        );
        this.viewCtrl.dismiss(
          {
            title: this.title,
            username: this.username,
            password: this.password
          }
        );
    } 
    else{
      this.loginService.addPassItem({
        title: this.title,
        username: this.username,
        password: this.password
      }, this.pageTitle);
      this.onCancel();
    } 
    //console.log(this.passItem);
  }

  onCancel() {
    this.viewCtrl.dismiss();
  }
}
