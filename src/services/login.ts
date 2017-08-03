import { SecureStorageService } from './secservice';
import { Passwords } from './../interface/passwords';
import { SecureStorage, SecureStorageObject } from '@ionic-native/secure-storage';
import { Injectable } from '@angular/core';

@Injectable()
export class LoginService{

    constructor(
        private passList: Passwords, 
        private secureStoreService: SecureStorageService
    ){}

    addPassItem(passItem: any, pageTitle: string){
        switch (pageTitle) {
            case "Logins":
                this.passList.logins.push(passItem);
                break;
            case "Passwords":
                this.passList.passwords.push(passItem);
                break;
            case "Email Accounts":
                this.passList.emails.push(passItem);
                break;
            case "Bank Accounts":
                this.passList.banks.push(passItem);
                break;
            case "Passports":
                this.passList.passports.push(passItem);
                break;
            case "Secure Notes":
                this.passList.notes.push(passItem);
                break;
            default:
                break;
        }  
        this.secureStoreService.saveKeys("keys", this.passList);
    }
    getPassList(page: string){ 
        let _passList = [];
        switch (page) {
            case "Logins":
                _passList = this.passList.logins;
                break;
            case "Passwords":
                _passList = this.passList.passwords;
                break;
            case "Email Accounts":
                _passList = this.passList.emails;
                break;
            case "Bank Accounts":
                _passList = this.passList.banks;
                break;
            case "Passports":
                _passList = this.passList.passports;
                break;
            case "Secure Notes":
                _passList = this.passList.notes;
                break;
            default:
                break;
        }
        console.log("getPassList() -> _passList" + _passList);
        return _passList;
    }
    getKeysData(key: string){
        this.secureStoreService.getkeyStorage()
        .then((sso: SecureStorageObject) => {
            sso.get(key)
                .then(
                    value => {
                    this.passList = JSON.parse(value);
                    console.log("in then() this.passList:");
                    console.log(this.passList);
                },
                reason => {
                    console.log("No passwords saved in key store yet!");
                }
            );
        });
    }
}