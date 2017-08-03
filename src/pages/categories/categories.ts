import { Passwords } from './../../interface/passwords';
import { LoginService } from './../../services/login';
import { NotePage } from './../note/note';
import { PassportPage } from './../passport/passport';
import { BankPage } from './../bank/bank';
import { EmailPage } from './../email/email';
import { PasswordPage } from './../password/password';
import { LoginPage } from './../login/login';
import { PassListPage } from './../passlist/passlist';

import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-categories',
  templateUrl: 'categories.html',
})
export class CategoriesPage {
  counter: number;
  passListPage = PassListPage;
  private categoryList: Array<{title: string, page: any, icon: string, counter: number}>;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private loginService: LoginService,
    private passList: Passwords
  ) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad CategoriesPage');
  } 
  ionViewWillEnter(){
    this.categoryList = [];
    this.loginService.getKeysData().then((value) => {
      this.passList = value;
      this.categoryList.push({title:'Logins', page: LoginPage, icon: 'lock', counter: this.passList.logins.length});
      this.categoryList.push({title:'Passwords', page: PasswordPage, icon: 'key', counter: this.passList.passwords.length});
      this.categoryList.push({title:'Email Accounts', page: EmailPage, icon: 'mail', counter: this.passList.emails.length});
      this.categoryList.push({title:'Bank Accounts', page: BankPage, icon: 'cash', counter: this.passList.banks.length});
      this.categoryList.push({title:'Passports', page: PassportPage, icon: 'book', counter: this.passList.passports.length});
      this.categoryList.push({title:'Secure Notes', page: NotePage, icon: 'document', counter: this.passList.notes.length});
    });
  }
 
}
