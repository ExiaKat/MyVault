import { DetailsPage } from './../details/details';
import { FavService } from './../../services/favservice';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-favourites',
  templateUrl: 'favourites.html',
})
export class FavouritesPage {

  favList: {pageTitle: string, passItem: any}[];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private favService: FavService
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FavouritesPage');
  }
  ionViewWillEnter(){
    this.favService.getFavData().then(value => this.favList = value);
    console.log("favourites page:");
    console.log("favList.length:" + this.favList.length);
  }
  isLoginPage(pageTitle: string){
      return pageTitle == "Logins";
  }
  isPasswordPage(pageTitle: string){
      return pageTitle == "Passwords";
  }
  isEmailPage(pageTitle: string){
      return pageTitle == "Email Accounts";
  }
  isBankPage(pageTitle: string){
      return pageTitle == "Bank Accounts";
  }
  isPassportPage(pageTitle: string){
      return pageTitle == "Passports";
  }
  isNotePage(pageTitle: string){
      return pageTitle =="Secure Notes";
  }

  onShowDetails(favItem: {pageTitle: string, passItem: any}){
        console.log(favItem.passItem);
        this.navCtrl.push(DetailsPage, {
            pageTitle: favItem.pageTitle, 
            passItem: favItem.passItem
        })
    }

}
