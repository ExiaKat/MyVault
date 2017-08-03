import { Injectable } from '@angular/core';
import { SecureStorage, SecureStorageObject } from '@ionic-native/secure-storage';

@Injectable()
export class SecureStorageService {
    keyStorage: Promise<SecureStorageObject>;

    constructor(private ss: SecureStorage) { 
        this.keyStorage = ss.create("key_store");
    }

    saveKeys(key: string, value: any){
        this.keyStorage.then((sso: SecureStorageObject) => {
            sso.set(key, JSON.stringify(value))
                .then(
                    value => {
                        console.log(key + " saved");
                        console.log(value);
                    },
                    reason => console.log(reason)
            );
        });
    }

    getkeyStorage(){
        return this.keyStorage;
        // console.log("secService.getKeys().data: ");
        // console.log(data);
        // return data;
    }

}