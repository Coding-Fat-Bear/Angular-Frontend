import { Timesheet } from './../Models/Timesheet.model';
import { TimesheetService } from './../Services/timesheet.service';
import { timeToHM } from './../tools/timeToHM';
import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, ResolveEnd } from '@angular/router';
import { timeToDate } from '../tools/timeToDate';
@Component({
  selector: 'app-timesheet',
  templateUrl: './timesheet.component.html',
  styleUrls: ['./timesheet.component.css']
})
export class TimesheetComponent implements OnInit {
  /////////////initialization
  selected = new Date();
  timesheet = new Timesheet();
  checkinTime = 9;
  checkoutTime = 18;
  ////////////formcontrol
  form = new FormGroup({
  checkin : new FormControl('', [Validators.required,this.timeRangeValidator,]),
  
  checkout : new FormControl('', [Validators.required,this.timeRangeValidator])
});
  //////////constructor
  constructor(private TimesheetService:TimesheetService,
    private snackBar: MatSnackBar,
    private route :ActivatedRoute) {
    
  }
/////////////// onInint
  async ngOnInit() {
    
    // this.checkin.
  // await this.fetchTimesheet(1,this.selected);
  }
/////////////// function start

///////////////display button  -dev satge
  displayLog(){
    console.log(this.selected);
    console.log(JSON.stringify(this.timesheet));
    console.log(this.form);
    
  }
/////////////// service for fetching timesheet
  async fetchTimesheet(id:number,date:Date){
    console.log("fetching");
    return this.TimesheetService.fetchById(id,date).then(data=>{
      console.log(data);
    })
  }
  /////////////calender output control
  calChange(event: Date){
    console.log(event);
  }

  timeRangeValidator(control: FormControl) {
    const [hours,minutes] = timeToHM(control.value);
    if (hours < 8 || hours > 17 || (hours === 17 && minutes > 0)) {
        return { timeRange: true };
      }
      return null;
    }

    timeOrderValidator(control1: FormControl,control2: FormControl) {
      const d1= timeToDate(control1.value);
      const d2 = timeToDate(control2.value);
    
        if (d2 >d1) {
          return  true;
        }
        else{
          return null;
        }

      }

       timeToDate(time :any) {
        const [hours, minutes] = time.split(":").map(Number);
        const date = new Date();
        date.setHours(hours);
        date.setMinutes(minutes);
        return date;
      }

  checkinUpdate()
  {
  
  }
 
  checkOutUpdate()
  {
    
  }

  btstartUpdate()
  {
   
  }

btendUpdate()
  {
    
  }

otstartUpdate()
  {
   
  }

otbtstartUpdate()
  {
   
  }

otbtendUpdate()
  {
    
  }

  cusbtcheck():boolean {return true}
  cusotbtcheck():boolean {return true}
  cusotcheck():boolean {return true}
}
