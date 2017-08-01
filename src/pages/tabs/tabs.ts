import { CategoriesPage } from './../categories/categories';
import { FavouritesPage } from './../favourites/favourites';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  favouritesPage = FavouritesPage;
  categoriesPage = CategoriesPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

}
