import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { UsersC } from './user';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
 public url=environment.api_url
  constructor(private http:HttpClient) { }
  postLogin(data:UsersC){
    return this.http.post<UsersC>(this.url+"/login",data)

  }
  islog(){
    return !!localStorage.getItem('token')
  }
}
