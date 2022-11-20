
import { Component, OnInit } from '@angular/core';
import { DateTime } from 'luxon';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  selected = DateTime.now().toJSDate();
  
  // selected = new Date();
  calChange(event: DateTime){
    console.log(this.selected);
    console.log(this.selected.toLocaleDateString());
    const hi : Date = DateTime.fromJSDate(this.selected).toJSDate();
    console.log(hi);
    
  }
  // selected: Date | null;
  constructor() { }

  ngOnInit(): void {
  }

}
