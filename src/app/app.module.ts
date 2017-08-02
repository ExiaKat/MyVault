import { FavService } from './../services/favservice';
import { DetailsPage } from './../pages/details/details';
import { Passwords } from './../interface/passwords';
import { LoginService } from './../services/login';
import { PassListPage } from './../pages/passlist/passlist';
import { NotePage } from './../pages/note/note';
import { PassportPage } from './../pages/passport/passport';
import { BankPage } from './../pages/bank/bank';
import { EmailPage } from './../pages/email/email';
import { PasswordPage } from './../pages/password/password';
import { LoginPage } from './../pages/login/login';
import { CategoriesPage } from './../pages/categories/categories';
import { FavouritesPage } from './../pages/favourites/favourites';
import { TabsPage } from './../pages/tabs/tabs';
import { SecureStorage } from '@ionic-native/secure-storage';

import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    FavouritesPage,
    CategoriesPage,
    PassListPage,
    LoginPage,
    PasswordPage,
    EmailPage,
    BankPage,
    PassportPage,
    NotePage,
    DetailsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    FavouritesPage,
    CategoriesPage,
    PassListPage,
    LoginPage,
    PasswordPage,
    EmailPage,
    BankPage,
    PassportPage,
    NotePage,
    DetailsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SecureStorage,
    LoginService,
    Passwords,
    FavService
  ]
})
export class AppModule {}
