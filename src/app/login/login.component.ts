import { LoginService } from './../Services/login.service';

import { Component, OnInit } from '@angular/core';
import { Login } from '../Models/login.model';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login = new Login();
  id : any;
  constructor(private loginService :LoginService,
              private router:Router,
              private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    
  }
  logIn(){
    if (this.login.USERNAME && this.login.PASSWORD) {
      console.log("bother are there");
      this.loginService.loginByUsernameAndPassword(this.login).subscribe(data =>{
        console.log(data);
        console.log(data.success);
        if(data.success === 1){
        localStorage.setItem('access_token', data.token);
        this.loginService.fetchLoginById(data.LOGINID).subscribe(data=>{
          console.log(data);
          
          this.id = data.LOGINID;
          this.Home()
        })
      }
      else{
        this._snackBar.open(data.data,"OK",{duration:2000});
      }
      })
      
    }
    else{
      console.log("worng");
    }
  }
  Home(){
    this.router.navigate(['/home',this.id]);
  }
}
