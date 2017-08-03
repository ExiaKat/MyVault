import { SecureStorageObject } from '@ionic-native/secure-storage';
import { SecureStorageService } from './secservice';
import { Injectable } from '@angular/core';

@Injectable()
export class FavService{

    private favList: {pageTitle: string, passItem: any}[];

    constructor(private secureStoreService: SecureStorageService){
        if(this.favList == null){
            this.favList = [];
        }
    }

    addToFavourites(pageTitle: string, passItem: any){
        this.favList.push({pageTitle, passItem});
        this.secureStoreService.saveKeys("fav", this.favList);
    }

    removeFromFavourites(passItem: any){
        let pos = this.favList.findIndex((favEle: {pageTitle: string, passItem: any})=>{
            return favEle.passItem.title == passItem.title;
        })
        this.favList.splice(pos, 1);
        this.secureStoreService.saveKeys("fav", this.favList);
    }
    
    getFavList(){
        return this.favList;
    }

    getFavData(key: string){
        return this.secureStoreService.getkeyStorage()
        .then((sso: SecureStorageObject) => {
            sso.get(key)
                .then(
                    value => {
                    this.favList = JSON.parse(value);
                    console.log("in then() this.favList:");
                    console.log(this.favList);
                },
                reason => {
                    console.log("No favourites saved in key store yet!");
                }
            );
        });            
    }

    isFavourite(passItem: any){
        return this.favList.find((favEle: {pageTitle: string, passItem: any}) =>
    {
        return favEle.passItem.title == passItem.title;
    });
    }

}