import { Component,OnInit} from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Login } from '../Models/Login.model';
import { LoginService } from '../Services/Login/login.service';
import { Router } from '@angular/router';
import { Token } from '../Models/Token.model';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  login = new Login();
  token1 = new Token();
  id : any;

  constructor(private _snackBar: MatSnackBar,private loginService :LoginService,
    private router:Router) {}

  ngOnInit(): void {

  }

  logIn(){
    if (this.login.USERNAME && this.login.PASSWORD) {
      console.log("bother are there");
      this.loginService.loginByUsernameAndPassword(this.login).subscribe(data1 =>{
        if(data1.success == 1){
          localStorage.setItem('access_token', data1.token);
          localStorage.setItem('id_in', data1.LOGINID);
          console.log("hello");
          console.log(data1.token.LOGINID);
          this.loginService.fetchLoginById(data1.LOGINID).subscribe(data2=>{
          // this.id = data2.LOGINID;
          })
          this._snackBar.open("Login Successfully","OK",{duration:2000});
          this.id = localStorage.getItem('id_in');
          this.Home(this.id);
        }else{
          this._snackBar.open("Invalid Username or Password","OK",{duration:2000});
        }
      });

    }
    else{
      this._snackBar.open("Please enter required fields","OK",{duration:2000});
    }
  }

  Home(Id:number){
    this.router.navigate(['/home',Id]);
  }

}
