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
  passListPage = PassListPage;
  private categoryList: Array<{title: string, page: any, icon: string}> = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.categoryList.push({title:'Logins', page: LoginPage, icon: 'lock'});
    this.categoryList.push({title:'Passwords', page: PasswordPage, icon: 'key'});
    this.categoryList.push({title:'Email Accounts', page: EmailPage, icon: 'mail'});
    this.categoryList.push({title:'Bank Accounts', page: BankPage, icon: 'cash'});
    this.categoryList.push({title:'Passports', page: PassportPage, icon: 'book'});
    this.categoryList.push({title:'Secure Notes', page: NotePage, icon: 'document'});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CategoriesPage');
  } 
 
}
