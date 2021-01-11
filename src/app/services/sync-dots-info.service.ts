import { EventEmitter, Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SyncDotsInfoService {
  public observedDots: EventEmitter<any[]> = new EventEmitter<any[]>();

  constructor() {
  }

  selectedDotsArray = [];

  addSelectedDotsArray(dots) {
    if (Array.from(dots).length == 3) {
      this.selectedDotsArray.push(Array.from(dots));
      console.log(`${Array.from(dots)}が追加されました`)
    }
    this.observedDots.next(this.selectedDotsArray);
  }

  syncDotsInfo() {
    console.log("selectedDotsArray: ", this.selectedDotsArray);
    return this.selectedDotsArray
  }

}
