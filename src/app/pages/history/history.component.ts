import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {

  constructor(public data:DataService) { }

  ngOnInit(){
    console.log('inside history');
    
    this.data.getHistory()
  }

  search(searchKey:any){
    this.data.username(searchKey,'history')
    this.data.profile = true
  }

  deleteHistory(i:any){
    this.data.history.splice(i,1)
    this.data.postHistory(this.data.history)
    this.data.getHistory()
  }

  clearHistory(){
    console.log("clicked");
    
    this.data.clearHistory()
  }

}
