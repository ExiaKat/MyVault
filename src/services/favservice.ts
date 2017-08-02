export class FavService{

    private favList: {pageTitle: string, passItem: any}[] = [];

    addToFavourites(pageTitle: string, passItem: any){
        this.favList.push({pageTitle, passItem});
    }

    removeFromFavourites(passItem: any){
        let pos = this.favList.findIndex((favEle: {pageTitle: string, passItem: any})=>{
            return favEle.passItem.title == passItem.title;
        })
        this.favList.splice(pos, 1);
    }
    
    getFavourites(){
        return this.favList;
    }

    isFavourite(passItem: any){
        return this.favList.find((favEle: {pageTitle: string, passItem: any}) =>
    {
        return favEle.passItem.title == passItem.title;
    });
    }

}