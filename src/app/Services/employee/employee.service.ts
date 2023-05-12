import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import{ Employee }from '../../Models/employee.model';

@Injectable({
  providedIn: 'root'
})

export class EmployeeService {
  private baseUrl = "http://localhost:3000";
  constructor(private httpClient: HttpClient) { }

  empget(Id:number,APPMASTER:string,AUTHFLG:string,employee:Employee):Observable<any>{
    const token  = localStorage.getItem('access_token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Access-Control-Allow-Origin','*');
    return this.httpClient.get(`${this.baseUrl}/api/empget/${Id}/${APPMASTER}/${AUTHFLG}/${employee.EMPCOD}`, {headers:headers});
  }

  empupd(Id:number,APPMASTER:string,AUTHFLG:string,employee:Employee):Observable<any>{
    const token  = localStorage.getItem('access_token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Access-Control-Allow-Origin','*');
    return this.httpClient.put(`${this.baseUrl}/api/empupd/${Id}/${APPMASTER}/${AUTHFLG}/${employee.EMPCOD}`,employee,{headers:headers});
  }

}
