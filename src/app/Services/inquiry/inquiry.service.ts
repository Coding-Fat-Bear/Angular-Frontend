import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import{ Inquiry }from '../../Models/inquiry.model';
@Injectable({
  providedIn: 'root'
})
export class InquiryService {
  private baseUrl = "http://localhost:3000";
  constructor(private httpClient: HttpClient) { }

  inqget(Id:number,APPMASTER:string,AUTHFLG:string,inquiry:Inquiry):Observable<any>{
    const token  = localStorage.getItem('access_token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Access-Control-Allow-Origin','*');
    return this.httpClient.get(`${this.baseUrl}/api/empget/${Id}/${APPMASTER}/${AUTHFLG}/${inquiry.INQNO}`, {headers:headers});
  }
}
