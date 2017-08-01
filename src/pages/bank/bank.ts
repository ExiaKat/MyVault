import { LoginService } from './../../services/login';
import { Passwords } from './../../interface/passwords';
import { ViewController, NavParams } from 'ionic-angular';
import { Component } from '@angular/core';

@Component({
    selector: 'page-bank',
    templateUrl: 'bank.html'
})
export class BankPage{
    title: string;
    account: string;
    mobile: string;
    username: string;
    password: string;
    pageTitle: string;

    constructor(
        private viewCtrl: ViewController,
        private passItem: Passwords,
        private loginService: LoginService,
        private navParams: NavParams
    ){}
    ionViewDidLoad() {  
    console.log('ionViewDidLoad BankPage');
    this.pageTitle = this.navParams.get("pageTitle");
    this.passItem = this.loginService.getPassObject();
    }

    onSave(){
        //Todo: save user's input and close the modal    
        this.loginService.addPassItem({
        title: this.title,
        account: this.account,
        mobile: this.mobile,
        username: this.username,
        password: this.password
        }, this.pageTitle);
        console.log(this.passItem);
        this.onCancel();
    }

    onCancel(){
        this.viewCtrl.dismiss(this.passItem.banks);
    }

}