import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  name = 'abcd'
  history:any
  userData:any = null;
  profile = false
  url = 'https://api.github.com/users/'

  constructor(private http: HttpClient) {
    // this.getHistory()
   }

  getHistory(){
    console.log('a');
    
    if(localStorage.getItem('history') == null || localStorage.getItem('history') == undefined){
      console.log('c');
      
      localStorage.setItem('history',JSON.stringify([]))
      this.history = JSON.parse(localStorage.getItem('history') || '[]')
    } else{
      console.log('b');
      
      this.history = JSON.parse(localStorage.getItem('history') || '')
      console.log(this.history);
      
    }
  }

  postHistory(data:any){
    localStorage.setItem('history',JSON.stringify(data))
  }

username(username:any,origin:any){
  this.getUsernameData(username).subscribe(res => {
    console.log(res);
    this.userData = res
    let a = {
      username: username,
      result : true
    }
    if(origin != 'history'){
      let c=false
      this.history.forEach((e:any) => {
        if(e.username == username){
              c = true
            }
      });
      
      if(!c){
        this.history.push(a)
        this.postHistory(this.history)
      }

    } 
  }, error => {
    console.log(error);
    this.userData = null
    let a = {
      username: username,
      result : false
    }
    if(origin != 'history'){
      let c=false
      this.history.forEach((e:any) => {
        if(e.username == username){
              c = true
            }
      });
      
      if(!c){
        this.history.push(a)
        this.postHistory(this.history)
      }
    } 
    
  })
}

  getUsernameData(username:any): Observable<any>{
    return this.http.get(this.url + username )
  }

  clearHistory(){
    console.log('inside');
    
    localStorage.removeItem('history')
    // this.history = []
    this.getHistory()
  }

}
