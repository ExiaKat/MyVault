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

    constructor(private viewCtrl: ViewController,
              private passItem: Passwords,
              private loginService: LoginService,
              private navParams: NavParams){      
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad NotePage');
        this.pageTitle = this.navParams.get("pageTitle");
        // this.passItem = this.loginService.getPassObject();
    }

    onSave(){
        //Todo: save user's input and close the modal    
        this.loginService.addPassItem({
        title: this.title,
        note: this.note
        }, this.pageTitle);
        // console.log(this.passItem);
        this.onCancel();
    }

    onCancel(){
        this.viewCtrl.dismiss();
    }
}