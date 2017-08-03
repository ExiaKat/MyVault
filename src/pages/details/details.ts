import { NotePage } from './../note/note';
import { PassportPage } from './../passport/passport';
import { BankPage } from './../bank/bank';
import { EmailPage } from './../email/email';
import { PasswordPage } from './../password/password';
import { LoginPage } from './../login/login';
import { LoginService } from './../../services/login';
import { FavService } from './../../services/favservice';
import { NavController, NavParams, ModalController, Modal } from 'ionic-angular';
import { Component } from '@angular/core';

@Component({
    selector: 'page-details',
    templateUrl: 'details.html'
})
export class DetailsPage {
    pageTitle: string;
    passItem: any;

    constructor(
        private navCtrl: NavController, 
        private navParams: NavParams, 
        private favService: FavService,
        private loginService: LoginService,
        private modalCtrl: ModalController
    ) {
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
    onFavourite(){
        this.favService.addToFavourites(this.pageTitle, this.passItem);
    }
    onUnFavourite(){
        this.favService.removeFromFavourites(this.passItem);
    }
    isFavourite(){
        return this.favService.isFavourite(this.passItem);
    }
    onDelete(){
        if(this.isFavourite()){
            this.onUnFavourite();
        }
        this.loginService.removePassItem(this.passItem, this.pageTitle);
        this.navCtrl.pop();
    }
    onEdit(){
        let modal: Modal;
        switch (this.pageTitle) {
            case "Logins":
                modal = this.modalCtrl.create(LoginPage, {pageTitle: this.pageTitle, passItem: this.passItem, update: true});
                modal.present();
                modal.onDidDismiss((data) => {
                    this.passItem = data;
                });                
                break;
            case "Passwords":
                modal = this.modalCtrl.create(PasswordPage, {pageTitle: this.pageTitle, passItem: this.passItem, update: true});
                modal.present();
                modal.onDidDismiss((data) => {
                    this.passItem = data;
                });
                break;
            case "Email Accounts":
                modal = this.modalCtrl.create(EmailPage, {pageTitle: this.pageTitle, passItem: this.passItem, update: true});
                modal.present();
                modal.onDidDismiss((data) => {
                    this.passItem = data;
                });
                break;
            case "Bank Accounts":
                modal = this.modalCtrl.create(BankPage, {pageTitle: this.pageTitle, passItem: this.passItem, update: true});
                modal.present();
                modal.onDidDismiss((data) => {
                    this.passItem = data;
                });
                break;
            case "Passports":
                modal = this.modalCtrl.create(PassportPage, {pageTitle: this.pageTitle, passItem: this.passItem, update: true});
                modal.present();
                modal.onDidDismiss((data) => {
                    this.passItem = data;
                });
                break;
            case "Secure Notes":
                modal = this.modalCtrl.create(NotePage, {pageTitle: this.pageTitle, passItem: this.passItem, update: true});
                modal.present();
                modal.onDidDismiss((data) => {
                    this.passItem = data;
                });
                break;
            default:
                break;
        }
    }
}