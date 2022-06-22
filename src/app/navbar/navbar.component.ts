import { Component, OnInit } from '@angular/core';
import {LoginService} from '../services/login.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  constructor(private router:Router,public loginservice:LoginService) { }

  ngOnInit(): void {
  }
  LogOut(){
    this.loginservice.logeduserdetails=null;
    this.router.navigate(["/home"]);
  }
  

}
