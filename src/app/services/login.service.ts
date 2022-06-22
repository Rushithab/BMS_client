import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import {Login} from '../ViewModels';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  logincheck:boolean=false;


  constructor(private http:HttpClient) { }
  public logeduserdetails:any=null;
  Login(data:any){
    return this.http.post('https://localhost:7111/api/Authenticate/login',data);
  }
}
