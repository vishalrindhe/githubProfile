import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  searchKey:any
  constructor(public data:DataService) { }

  ngOnInit(): void {
    setTimeout(()=>{
      this.data.name= 'xyz'
    },5000)
  }

}
