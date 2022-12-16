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

  fetchById(id:number,date:Date){
    console.log("service");
    
    console.log(`${this.baseUrl}/timesheet/update/${id}/${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}T00:00:00.000Z`);
    return this.httpClient.get<Timesheet>(`${this.baseUrl}/timesheet/fetch/${id}/${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}T00:00:00.000Z`).toPromise();
  }

  createById(Timesheet:Timesheet,id:number):Observable<any>{
    return this.httpClient.post<any>(`${this.baseUrl}/timesheet/create/${id}`,Timesheet)
  }

  updateById(Timesheet:Timesheet,id:number,date:Date):Observable<any>{
    console.log("service");
    
    console.log(`${this.baseUrl}/timesheet/update/${id}/${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}T00:00:00.000Z`);
    
    return this.httpClient.post<any>(`${this.baseUrl}/timesheet/update/${id}/${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}T00:00:00.000Z`,Timesheet)
  }

  fetchByAllId(id:number):Observable<any>{
    return this.httpClient.get<Timesheet[]>(`${this.baseUrl}/timesheet/fetchAll/${id}`)
  }

}
