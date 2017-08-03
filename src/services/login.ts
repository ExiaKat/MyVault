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
    updatePassItem(oldPassItem: any, newPassItem: any, pageTitle: string){
        let pos: number;
        switch (pageTitle) {
            case "Logins":
                pos = this.passList.logins.findIndex((itemEle) => {
                    return itemEle.title == oldPassItem.title;
                })
                this.passList.logins.splice(pos, 1, newPassItem);
                break;
            case "Passwords":
                pos = this.passList.passwords.findIndex((itemEle) => {
                    return itemEle.title == oldPassItem.title;
                })
                this.passList.passwords.splice(pos, 1, newPassItem);
                break;
            case "Email Accounts":
                pos = this.passList.emails.findIndex((itemEle) => {
                    return itemEle.title == oldPassItem.title;
                })
                this.passList.emails.splice(pos, 1, newPassItem);
                break;
            case "Bank Accounts":
                pos = this.passList.banks.findIndex((itemEle) => {
                    return itemEle.title == oldPassItem.title;
                })
                this.passList.banks.splice(pos, 1, newPassItem);
                break;
            case "Passports":
                pos = this.passList.passports.findIndex((itemEle) => {
                    return itemEle.title == oldPassItem.title;
                })
                this.passList.passports.splice(pos, 1, newPassItem);
                break;
            case "Secure Notes":
                pos = this.passList.notes.findIndex((itemEle) => {
                    return itemEle.title == oldPassItem.title;
                })
                this.passList.notes.splice(pos, 1, newPassItem);
                break;
            default:
                break;
        }  
        this.secureStoreService.saveKeys("keys", this.passList);
    }
    removePassItem(passItem: any, pageTitle: string){
        let pos: number;
        switch (pageTitle) {
            case "Logins":
                pos = this.passList.logins.findIndex(itemele => {
                    return itemele.title == passItem.title;
                })
                this.passList.logins.splice(pos, 1);
                break;
            case "Passwords":
                pos = this.passList.passwords.findIndex(itemele => {
                    return itemele.title == passItem.title;
                })
                this.passList.passwords.splice(pos, 1);
                break;
            case "Email Accounts":
                pos = this.passList.emails.findIndex(itemele => {
                    return itemele.title == passItem.title;
                })
                this.passList.emails.splice(pos, 1);
                break;
            case "Bank Accounts":
                pos = this.passList.banks.findIndex(itemele => {
                    return itemele.title == passItem.title;
                })
                this.passList.banks.splice(pos, 1);
                break;
            case "Passports":
                pos = this.passList.passports.findIndex(itemele => {
                    return itemele.title == passItem.title;
                })
                this.passList.passports.splice(pos, 1);
                break;
            case "Secure Notes":
                pos = this.passList.notes.findIndex(itemele => {
                    return itemele.title == passItem.title;
                })
                this.passList.notes.splice(pos, 1);
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
    getKeysData(){
        return this.secureStoreService.getkeyStorage("keys")
                .then(
                    value => {
                    this.passList = JSON.parse(value);
                    console.log("in then() this.passList:");
                    console.log(this.passList);
                    return this.passList;
                },
                    reason => {
                        console.log("No passwords saved in key store yet!");
                        return this.passList;
                    }
                );        
    }
}