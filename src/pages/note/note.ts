import { FavService } from './../../services/favservice';
import { LoginService } from './../../services/login';
import { Passwords } from './../../interface/passwords';
import { ViewController, NavParams } from 'ionic-angular';
import { Component } from '@angular/core';

@Component({
    selector: 'page-note',
    templateUrl: 'note.html'
})
export class NotePage {
    title: string;
    note: string;
    pageTitle: string;
    update: boolean;
    oldPassItem: {title, note};

    constructor(private viewCtrl: ViewController,
              private passItem: Passwords,
              private loginService: LoginService,
              private navParams: NavParams,
              private favService: FavService){      
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad NotePage');
        this.update = false;
        this.pageTitle = this.navParams.get("pageTitle");
        if(this.navParams.get("passItem")){
            this.oldPassItem = this.navParams.get("passItem");
            this.title = this.oldPassItem.title;
            this.note = this.oldPassItem.note
        }
    }

    onSave(){
        if(this.update){
            this.loginService.updatePassItem(
                this.oldPassItem,
                {
                    title: this.title,
                    note: this.note
                },
                this.pageTitle
            );
            this.favService.updateFavourites(
                this.oldPassItem,
                {
                    title: this.title,
                    note: this.note
                }
            );
            this.viewCtrl.dismiss(
                {
                    title: this.title,
                    note: this.note
                }
            );
        }else{
            this.loginService.addPassItem(
                {
                    title: this.title,
                    note: this.note
                }, 
                this.pageTitle
            );
        }
        // console.log(this.passItem);
        this.onCancel();
    }

    onCancel(){
        this.viewCtrl.dismiss();
    }
}