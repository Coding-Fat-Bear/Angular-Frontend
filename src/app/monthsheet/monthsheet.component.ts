import { Login } from './../Models/login.model';
import { Timesheet } from './../Models/Timesheet.model';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { TimesheetService } from './../Services/timesheet.service';
import { dateToHM } from '../tools/dateToHM';
import { timeToDate_Def } from '../tools/timeToDate_Def';
@Component({
  selector: 'app-monthsheet',
  templateUrl: './monthsheet.component.html',
  styleUrls: ['./monthsheet.component.css']
})
export class MonthsheetComponent implements OnInit {
  data :any;
  id: number ;
  month : number;
  year : number;
  res = new Timesheet();
  timesheets: Array<Timesheet> = [];
  daysInMonth : number;
  

  form = this.fb.group({
    row: this.fb.array([])
});

  constructor(private fb : FormBuilder,private TimesheetService:TimesheetService,private route :ActivatedRoute) { 
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.month = this.route.snapshot.params['month'];
    this.year = this.route.snapshot.params['year'];
    this.daysInMonth = new Date(this.year, this.month, 0).getDate();
    this.TimesheetService.fetchByAllId(this.id,this.month,this.year).subscribe((data)=>{
      console.log(data);
    
      for (let day = 1; day <= this.daysInMonth; day++) {
        let timesheet = new Timesheet();
        let timesheet_d = new Timesheet();
        timesheet_d.tsdate = new Date(this.year,this.month-1,day);
        timesheet_d.tsdate.setHours(9);
        
        timesheet.tsdate  = timesheet_d.tsdate.toISOString();
        this.timesheets.push({
          LOGINID: Number(this.id),
          tsdate: timesheet.tsdate,
          checkin: undefined,
          checkout: undefined,
          timeid: 0,
          totalhours: 0,
          btstart: undefined,
          btend: undefined,
          breakflag: false,
          comment: undefined,
          otstart: undefined,
          otend: undefined,
          otbtstart: undefined,
          otbtend: undefined,
          daytype: undefined,
          cflag: false
        });
        
      }
      console.log(this.timesheets);
      const map = new Map(data.map((item: { [x: string]: any; }) => [item["tsdate"], item]));

    for (let i = 0; i < this.timesheets.length; i++) {
      const id = this.timesheets[i].tsdate;
      
      if (map.has(id)) {
            const t = new Timesheet();
        this.timesheets[i] = map.get(id) as Timesheet;
      }
    }
    console.log(this.timesheets);
    this.addRow();
    })
   
  }

  get row() {
    return this.form.controls["row"] as FormArray;
  }
  addRow() {
    this.timesheets.forEach((element: Timesheet) => {
      // console.log(element.tsdate);
      // console.log(element.totalhours);
      const rowForm = this.fb.group({
        LOGINID :[0],
        tsdate :[''],
        dayType : ['none'],
        checkin :  [''],
        checkout :  [''],
        breakflag : [true],
        comment : [''],
        totalhours : [0],
        OtStart :[''],
        OtEnd :[''],
        isBreaktime :[false],
        isOtBreaktime :[false,],
        BtOtStart :[''],
        BtOtEnd : [''],
        BtStart :[''],
        BtEnd :['']
        });
        !(element.LOGINID)?rowForm.get('LOGINID')?.setValue(0):rowForm.get('LOGINID')?.setValue(element.LOGINID);
        !(element.tsdate)?rowForm.get('tsdate')?.setValue(""):rowForm.get('tsdate')?.setValue(element.tsdate);
        !(element.checkin)?rowForm.get('checkin')?.setValue(""):rowForm.get('checkin')?.setValue(dateToHM(element.checkin));
        !(element.checkout)?rowForm.get('checkout')?.setValue(""):rowForm.get('checkout')?.setValue(dateToHM(element.checkout));
        !(element.daytype)?rowForm.get('dayType')?.setValue("none"):rowForm.get('dayType')?.setValue((element.daytype));
        !(element.breakflag)?rowForm.get('breakflag')?.setValue(false):rowForm.get('breakflag')?.setValue((element.breakflag));
        !(element.comment)?rowForm.get('comment')?.setValue(""):rowForm.get('comment')?.setValue((element.comment));
        !(element.otstart)?rowForm.get('OtStart')?.setValue(""):rowForm.get('OtStart')?.setValue(dateToHM(element.otstart));
        !(element.otend)?rowForm.get('OtEnd')?.setValue(""):rowForm.get('OtEnd')?.setValue(dateToHM(element.otend));
        !(element.otbtstart)?rowForm.get('BtOtStart')?.setValue(""):rowForm.get('BtOtStart')?.setValue(dateToHM(element.otbtstart));
        !(element.otbtend)?rowForm.get('BtOtEnd')?.setValue(""):rowForm.get('BtOtEnd')?.setValue(dateToHM(element.otbtend));
        !(element.btstart)?rowForm.get('BtStart')?.setValue(""):rowForm.get('BtStart')?.setValue(dateToHM(element.btstart));
        !(element.btend)?rowForm.get('BtEnd')?.setValue(""):rowForm.get('BtEnd')?.setValue(dateToHM(element.btend));
        !(element.totalhours)?rowForm.get('totalhours')?.setValue(0):rowForm.get('totalhours')?.setValue((element.totalhours));

        this.row.push(rowForm);
    });
    
    const rowArray = this.form.get('row') as FormArray;
    this.rowArray.valueChanges.subscribe(rows => {
      rows.forEach((row: { breakflag: any; }, index: number) => {
        if (row.breakflag) {
          // update data in form array for this row
          // row.breakflag = !(row.breakflag );
          console.log(row.breakflag);
          
          console.log('chnaged'+index);
          
        } else {
          // update data in form array for this row
        }
      });
    });
  }

  get rowValue(): any[] {
    return this.row.value;
  } 

  get rowArray(){
    return this.form.get('row') as FormArray;
  }
  display(){
    
    

    this.row.value.forEach((element: any) => {
      if (element.checkin) {
        const t_date = new Date(element.tsdate);
        this.res.LOGINID = element.LOGINID;
        this.res.tsdate = element.tsdate;

        if(element.checkin){this.res.checkin = timeToDate_Def(t_date,element.checkin).toJSON;}
        if(element.checkout){this.res.checkout = timeToDate_Def(t_date,element.checkout).toJSON;}

        if(element.otstart){this.res.otstart = timeToDate_Def(t_date,element.otstart).toJSON;}
        if(element.otend){this.res.otend = timeToDate_Def(t_date,element.otend).toJSON;}

        if(element.btstart){this.res.btstart = timeToDate_Def(t_date,element.btstart).toJSON;}
        if(element.btend){this.res.btend = timeToDate_Def(t_date,element.btend).toJSON;}

        if(element.otbtstart){this.res.otbtstart = timeToDate_Def(t_date,element.otbtstart).toJSON;}
        if(element.otbtend){this.res.otbtend = timeToDate_Def(t_date,element.otbtend).toJSON;}

        this.res.breakflag = element.breakflag;
        this.res.comment = element.comment;
        this.res.totalhours = element.totalhours;
        this.res.daytype = element.daytype;
        this.res.timeid = element.timeid;
        this.res.cflag = element.cflag;
        console.log(this.res);

        this.TimesheetService.updateById(this.res,this.route.snapshot.params['id'],t_date).subscribe(data=>{
          console.log(data);
        })
      }
      
      
    });
    // console.log(this.rowValue);
  
    
  }
}