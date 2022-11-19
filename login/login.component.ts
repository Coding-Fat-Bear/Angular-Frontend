
import { Component, OnInit } from '@angular/core';
import { DateTime } from 'luxon';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  selected: Date = new Date();
  
  constructor() { }

  ngOnInit(): void {
  }

}
