import { FavService } from './../../services/favservice';
import { LoginService } from './../../services/login';
import { Passwords } from './../../interface/passwords';
import { ViewController, NavParams } from 'ionic-angular';
import { Component } from '@angular/core';

@Component({
    selector: 'page-password',
    templateUrl: 'password.html'
})
export class PasswordPage{    
    title: string;
    password: string;
    pageTitle: string;
    update: boolean;
    oldPassItem: {title, password};

    constructor(private viewCtrl: ViewController,
                private passItem: Passwords,
                private loginService: LoginService,
                private navParams: NavParams,
                private favService: FavService){

    }

    ionViewDidLoad() {
        console.log("page_title:" + this.pageTitle);
        this.update = false;
        this.pageTitle = this.navParams.get("pageTitle");
        if (this.navParams.get("passItem")) {
            this.oldPassItem = this.navParams.get("passItem");
            this.update = this.navParams.get("update");
            this.title = this.oldPassItem.title;
            this.password = this.oldPassItem.password;
        }
    }

    onSave() {
        if (this.update) {
            this.loginService.updatePassItem(
                this.oldPassItem, {
                    title: this.title,
                    password: this.password
                },
                this.pageTitle);
            this.favService.updateFavourites(
                this.oldPassItem, {
                    title: this.title,
                    password: this.password
                }
            );
            this.viewCtrl.dismiss(
                {
                    title: this.title,
                    password: this.password
                }
            );
        } else {
            this.loginService.addPassItem({
                title: this.title,
                password: this.password
            }, this.pageTitle);
            this.onCancel()
        }
    }


    onCancel() {
      this.viewCtrl.dismiss();
    }

}