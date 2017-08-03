import { DetailsPage } from './../details/details';
import { LoginService } from './../../services/login';

import { Component } from '@angular/core';
import { NavParams, ModalController, NavController } from 'ionic-angular';

@Component({
    selector: 'page-passlist',
    templateUrl: 'passlist.html'
})
export class PassListPage{

    private category: {title: string, page: any, icon: string};
    title: string;
    passList: any;

    constructor(private navCtrl: NavController,
                private navParams: NavParams,
                private modalCtrl: ModalController,
                private loginService: LoginService){

    }

    ionViewWillEnter(){
        console.log("passlist view will enter!");
        this.category = this.navParams.data;
        this.title = this.category.title;
        this.passList = this.loginService.getPassList(this.category.title);
        // console.log(this.loginList);
    }    

    onAddItem(page: any){
        let modalPage = this.modalCtrl.create(page, {pageTitle: this.title});
        modalPage.present();
        //modalPage.onDidDismiss((data: any[]) => this.passList = data);
    }

    isLoginPage(){
        return this.category.title == "Logins";
    }
    isPasswordPage(){
        return this.category.title == "Passwords";
    }
    isEmailPage(){
        return this.category.title == "Email Accounts";
    }
    isBankPage(){
        return this.category.title == "Bank Accounts";
    }
    isPassportPage(){
        return this.category.title == "Passports";
    }
    isNotePage(){
        return this.category.title =="Secure Notes";
    }
    onShowDetails(passItem: any){
        console.log(passItem);
        this.navCtrl.push(DetailsPage, {
            pageTitle: this.category.title, 
            passItem: passItem
        })
    }
}