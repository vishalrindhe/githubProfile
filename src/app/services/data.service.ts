import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  name = 'abcd'
  history:any

  constructor() {
    this.getHistory()
   }

  getHistory(){
    this.history = localStorage.getItem('history')
  }

}
