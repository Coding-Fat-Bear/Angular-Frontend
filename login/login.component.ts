
import { Component, OnInit } from '@angular/core';
import { DateTime } from 'luxon';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // selected: DateTime = DateTime;
  selected = DateTime.now().toLocaleString();
  // selected = DateTime.fromISO(this.str);
  calChange(event: DateTime){
  }
  // selected: Date | null;
  constructor() { }

  ngOnInit(): void {
  }

}
