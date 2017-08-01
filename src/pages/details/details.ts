import { Passwords } from './../../interface/passwords';
import { NavController, NavParams } from 'ionic-angular';
import { Component } from '@angular/core';

@Component({
    selector: 'page-details',
    templateUrl: 'details.html'
})
export class DetailsPage {
    pageTitle: string;
    passItem: any;

    constructor(private navCtrl: NavController, private navParams: NavParams) {
        this.pageTitle = this.navParams.get("pageTitle");
        this.passItem = this.navParams.get("passItem");
    }
    isLoginPage(){
        return this.pageTitle == "Logins";
    }
    isPasswordPage(){
        return this.pageTitle == "Passwords";
    }
    isEmailPage(){
        return this.pageTitle == "Email Accounts";
    }
    isBankPage(){
        return this.pageTitle == "Bank Accounts";
    }
    isPassportPage(){
        return this.pageTitle == "Passports";
    }
    isNotePage(){
        return this.pageTitle =="Secure Notes";
    }
}