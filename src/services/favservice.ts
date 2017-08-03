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

    updateFavourites(oldPassItem: any, newPassItem: any){
        let pos = this.favList.findIndex((favEle) => {
            return favEle.passItem.title == oldPassItem.title;
        })
        if(pos != -1){
            this.favList[pos].passItem = newPassItem;
            this.secureStoreService.saveKeys("fav", this.favList);
        }
    }

    getFavList(){
        return this.favList;
    }

    getFavData(){
        return this.secureStoreService.getkeyStorage("fav")
            .then(
                (value) => {
                this.favList = JSON.parse(value);
                console.log("in then() this.favList:");
                console.log(this.favList);
                return this.favList;
            },
                (reason) => {
                    console.log("No favourites saved in key store yet!");
                    return this.favList;
            });          
    }

    isFavourite(passItem: any){
        return this.favList.find((
            favEle: {pageTitle: string, passItem: any}) =>{
                return favEle.passItem.title == passItem.title;
            });
    }

}