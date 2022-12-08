import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Login } from '../Models/login.model';
import { LoginService } from '../Services/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  id : any;
  login = new Login();
  constructor(private loginService :LoginService,
    private route :ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.loginService.fetchLoginById(this.id).subscribe(data=>{
      console.log(data);
      this.login = data;
    })
  }

}
