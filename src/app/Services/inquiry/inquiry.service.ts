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
    console.log(APPMASTER);
    console.log(AUTHFLG);
    return this.httpClient.get(`${this.baseUrl}/api/fetchInq/${Id}/${APPMASTER}/${AUTHFLG}/${inquiry.INQNO}`, {headers:headers});
  }

  inqcre(Id:number,APPMASTER:string,AUTHFLG:string,inquiry:Inquiry):Observable<any>{
    const token  = localStorage.getItem('access_token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Access-Control-Allow-Origin','*');
    console.log(APPMASTER);
    console.log(AUTHFLG);
    return this.httpClient.post(`${this.baseUrl}/api/createInq/${Id}/${APPMASTER}/${AUTHFLG}`,inquiry,{headers:headers});
  }

  inqdel(Id:number,APPMASTER:string,AUTHFLG:string,inquiry:Inquiry):Observable<any>{
    const token  = localStorage.getItem('access_token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Access-Control-Allow-Origin','*');
    return this.httpClient.delete(`${this.baseUrl}/api/deleteinq/${Id}/${APPMASTER}/${AUTHFLG}/${inquiry.INQNO}`,{headers:headers});
  }

  inqupd(Id:number,APPMASTER:string,AUTHFLG:string,inquiry:Inquiry):Observable<any>{
    const token  = localStorage.getItem('access_token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Access-Control-Allow-Origin','*');
    return this.httpClient.put(`${this.baseUrl}/api/updateInq/${Id}/${APPMASTER}/${AUTHFLG}`,inquiry,{headers:headers});
  }
}
