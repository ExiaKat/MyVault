import { FavService } from './../../services/favservice';
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
  oldPassItem: { title, emailadd, emailpass };
  update: boolean;

  constructor(
    private viewCtrl: ViewController,
    private passItem: Passwords,
    private loginService: LoginService,
    private navParams: NavParams,
    private favService: FavService
  ) { }
  ionViewDidLoad() {
    console.log('ionViewDidLoad EmailPage');
    this.update = false;
    this.pageTitle = this.navParams.get("pageTitle");
    if (this.navParams.get("passItem")) {
      this.oldPassItem = this.navParams.get("passItem");
      this.update = this.navParams.get("update");
      this.title = this.oldPassItem.title;
      this.emailadd = this.oldPassItem.emailadd;
      this.emailpass = this.oldPassItem.emailpass;
    }
  }

  onSave() {
    if (this.update) {
      this.loginService.updatePassItem(
        this.oldPassItem, {
          title: this.title,
          emailadd: this.emailadd,
          emailpass: this.emailpass
        },
        this.pageTitle);
      this.favService.updateFavourites(
        this.oldPassItem, {
          title: this.title,
          emailadd: this.emailadd,
          emailpass: this.emailpass
        }
      );
      this.viewCtrl.dismiss(
        {
          title: this.title,
          emailadd: this.emailadd,
          emailpass: this.emailpass
        }
      );
    } else {
      this.loginService.addPassItem({
        title: this.title,
        emailadd: this.emailadd,
        emailpass: this.emailpass
      }, this.pageTitle);
    }
    // console.log(this.passItem);
    this.onCancel();
  }

  onCancel() {
    this.viewCtrl.dismiss();
  }
}
