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

    constructor(private viewCtrl: ViewController,
                private passItem: Passwords,
                private loginService: LoginService,
                private navParams: NavParams){

    }

    ionViewDidLoad(){
        console.log("page_title:" + this.pageTitle);
        this.pageTitle = this.navParams.get("pageTitle");
        this.passItem = this.loginService.getPassObject();
    }

    onSave(){        
        this.loginService.addPassItem({
            title: this.title, 
            password: this.password
        }, this.pageTitle);
        this.onCancel()
    }
    onCancel(){
        this.viewCtrl.dismiss(this.passItem.passwords);
    }
}