import { Timesheet } from './../Models/Timesheet.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Token } from '../Models/Token.model';

@Injectable({
  providedIn: 'root'
})
export class TimesheetService {
  private baseUrl = "http://localhost:3000";
  constructor(private httpClient: HttpClient) { }

  fetchById(id:number,date:Date):Observable<any>{
    console.log("service");
    
    const month = (date.getMonth()+1)<10?"0"+(date.getMonth()+1):date.getMonth()+1;
    const date_v = (date.getDate())<10?"0"+date.getDate():date.getDate();


    console.log(`${this.baseUrl}/timesheet/update/${id}/${date.getFullYear()}-${month}-${date_v}T00:00:00.000Z`);
    return this.httpClient.get<Timesheet>(`${this.baseUrl}/timesheet/fetch/${id}/${date.getFullYear()}-${month}-${date_v}T00:00:00.000Z`);
  }

  createById(Timesheet:Timesheet,id:number):Observable<any>{
    return this.httpClient.post<any>(`${this.baseUrl}/timesheet/create/${id}`,Timesheet)
  }

  updateById(Timesheet:Timesheet,id:Number,date:Date):Observable<any>{
    console.log("service");
    // console.log(date);
    
    const month = (date.getMonth()+1)<10?"0"+(date.getMonth()+1):date.getMonth()+1;
    const date_v = (date.getDate())<10?"0"+date.getDate():date.getDate();
    // console.log(`${this.baseUrl}/timesheet/update/${id}/${date.getFullYear()}-${month}-${date_v}T00:00:00.000Z`);
    // console.log(Timesheet);
    
    return this.httpClient.put<any>(`${this.baseUrl}/timesheet/update/${id}/${date.getFullYear()}-${month}-${date_v}T00:00:00.000Z`,Timesheet)
  }

  fetchByAllId(id:number,month:number,year:number):Observable<any>{
    return this.httpClient.get<Timesheet[]>(`${this.baseUrl}/timesheet/fetchAll/${id}/${month}/${year}`)
  }
  

}
