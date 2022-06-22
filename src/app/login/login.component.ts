import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl,FormGroup } from '@angular/forms';
import {HttpClient} from'@angular/common/http';
import {Router} from '@angular/router';
import {LoginService} from '../services/login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form:FormGroup;

  constructor(private formBuilder:FormBuilder,private http:HttpClient,private router:Router,private loginservice:LoginService) { }
  loginDetails=new FormGroup({
    username: new FormControl(''),
    password:new FormControl('')
  })
  ngOnInit(): void {

  }
  submit():void{
    this.loginservice.Login(this.loginDetails.value).subscribe(data=>{
      console.log(data);
      this.loginDetails.reset();
      if(data==null){
        alert("Invalid Credentials");
        return;
      }
      this.loginservice.logeduserdetails=data;
      this.router.navigate(['/view-movie']);
    })
    
  }


}
