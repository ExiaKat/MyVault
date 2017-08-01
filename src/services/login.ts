import { Passwords } from './../interface/passwords';
import { SecureStorage, SecureStorageObject } from '@ionic-native/secure-storage';
import { Injectable } from '@angular/core';

@Injectable()
export class LoginService{

    private ss: SecureStorage;
    private keyStore: Promise<SecureStorageObject>;

    constructor(private passList: Passwords){
        this.ss = new SecureStorage();
        this.keyStore = this.ss.create("key_store");
    }

    addPassItem(passItem: any, pageTitle: string){
        switch (pageTitle) {
            case "Logins":
                this.passList.logins.push(passItem);
                console.log("in case loginpage");
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
        this.keyStore.then((storage: SecureStorageObject) => {
            storage.set("keys", JSON.stringify(this.passList)).then(
                data => console.log("login saved!"),
                error => console.log(error)
            );
        });
    }
    prepareData(){
        this.keyStore.then((storage: SecureStorageObject) => {
            storage.get("keys").then(data => {
                this.passList= JSON.parse(data);
                console.log(this.passList);
            }, error => {
                console.log("No passwords saved in key store yet!")
            });
        });
    }
    getPassList(page: string){ 
        let _passList = [];
        switch (page) {
            case "Logins":
                _passList = this.passList.logins;
                console.log("in case loginpage");
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
    getPassObject(){
        return this.passList;
    }
}