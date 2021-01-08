import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SyncDotsInfoService {

  constructor() { }

  selectedDotsArray = [];

  addSelectedDotsArray(dots){
    if(Array.from(dots).length == 3){
      this.selectedDotsArray.push(Array.from(dots));
      console.log(`${Array.from(dots)}が追加されました`)  
    }
  }

  syncDotsInfo(){
    console.log("selectedDotsArray: ", this.selectedDotsArray);
    return this.selectedDotsArray
  }

}
