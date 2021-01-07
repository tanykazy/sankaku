import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SyncDotsInfoService {

  constructor() { }

  selectedDotsArray = [];

  addSelectedDotsArray(dots){
    this.selectedDotsArray.push(dots);
  }

  syncDotsInfo(){
    console.log(this.selectedDotsArray);
  }

}
