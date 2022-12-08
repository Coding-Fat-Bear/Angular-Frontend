import { Component, OnInit } from '@angular/core';
import { Timesheet } from "../Models/Timesheet.model";
import { Clock } from "../Models/Clock.model";
import { DateTime } from 'luxon';

@Component({
  selector: 'app-timesheet',
  templateUrl: './timesheet.component.html',
  styleUrls: ['./timesheet.component.css']
})
export class TimesheetComponent implements OnInit {

  selected = DateTime.now().toJSDate();
  checkinClock = new Clock("00","00");
  checkOutClock = new Clock("00","00");
  timesheet = new Timesheet();
  // selected = new Date();
  calChange(event: DateTime){
    console.log(this.selected);
    

    console.log(this.selected.toLocaleDateString());
    const hi : Date = DateTime.fromJSDate(this.selected).toJSDate();
    console.log(hi);
    
  }
  constructor() {
    
  }

  ngOnInit(): void {
    this.timesheet.selectedDate = new Date();
  this.timesheet.checkin = new Date();
  this.timesheet.checkout = new Date();
 
  ////CheckIn 
  this.timesheet.checkin = new Date();
  this.timesheet.checkout = new Date();
  this.checkinClock.hour = this.timesheet.checkin.getHours().toString();
  this.checkinClock.min = this.timesheet.checkin.getMinutes().toString();
  ////CheckOut
  this.timesheet.checkin = new Date();
  this.timesheet.checkout = new Date();
  this.checkOutClock.hour = this.timesheet.checkout.getHours().toString();
  this.checkOutClock.min = this.timesheet.checkout.getMinutes().toString();
  }
  //  in(event : any)
  // {
  //   console.log("in");
  //   console.log(event.value);
  //   console.log(this.timesheet.checkin);
  // }
  // out(event :any)
  // {
  //   console.log("out");
  //   console.log(this.timesheet.checkout.setTime(event.timeStamp));
  //   console.log(this.timesheet.checkout);
  // }
  checkinUpdate()
  {
    //  this.timesheet.checkin
    console.log(this.checkinClock.hour);
    console.log(this.checkinClock.min);
    this.timesheet.checkin = this.checkinClock.dateParse(this.checkinClock.hour,this.checkinClock.min);
    console.log(this.timesheet.checkin );
    
  }
 
  checkOutUpdate()
  {
    //  this.timesheet.checkin
    console.log(this.checkOutClock.hour);
    console.log(this.checkOutClock.min);
    this.timesheet.checkout = this.checkinClock.dateParse(this.checkOutClock.hour,this.checkOutClock.min);
    console.log(this.timesheet.checkin );
    
  }
}
