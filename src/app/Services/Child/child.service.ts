import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChildService {
  private baseUrl = "http://localhost:3000";

  constructor(private httpClient: HttpClient) { }

  bankgetall(Id:number):Observable<any>{
    const token  = localStorage.getItem('access_token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    headers.set('Access-Control-Allow-Origin','*');
    return this.httpClient.get(`${this.baseUrl}/api/bnkgetall/${Id}`,{ headers: headers })
  }

  bslngetall(Id:number):Observable<any>{
    const token  = localStorage.getItem('access_token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    headers.set('Access-Control-Allow-Origin','*');
    return this.httpClient.get(`${this.baseUrl}/api/bslngetall/${Id}`,{ headers: headers })
  }

  deptgetall(Id:number):Observable<any>{
    const token  = localStorage.getItem('access_token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    headers.set('Access-Control-Allow-Origin','*');
    return this.httpClient.get(`${this.baseUrl}/api/deptgetall/${Id}`,{ headers: headers })
  }

  emptypgetall(Id:number):Observable<any>{
    const token  = localStorage.getItem('access_token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    headers.set('Access-Control-Allow-Origin','*');
    return this.httpClient.get(`${this.baseUrl}/api/emptypgetall/${Id}`,{ headers: headers })
  }

  rnkempgetall(Id:number):Observable<any>{
    const token  = localStorage.getItem('access_token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    headers.set('Access-Control-Allow-Origin','*');
    return this.httpClient.get(`${this.baseUrl}/api/rnkempgetall/${Id}`,{ headers: headers })
  }

  modulgetall(Id:number):Observable<any>{
    const token  = localStorage.getItem('access_token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    headers.set('Access-Control-Allow-Origin','*');
    return this.httpClient.get(`${this.baseUrl}/api/modugetall/${Id}`,{ headers: headers })
  }

  pgmlnggetall(Id:number):Observable<any>{
    const token  = localStorage.getItem('access_token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    headers.set('Access-Control-Allow-Origin','*');
    return this.httpClient.get(`${this.baseUrl}/api/pgmlnggetall/${Id}`,{ headers: headers })
  }

  cntrygetall(Id:number):Observable<any>{
    const token  = localStorage.getItem('access_token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    headers.set('Access-Control-Allow-Origin','*');
    return this.httpClient.get(`${this.baseUrl}/api/cntrygetall/${Id}`,{ headers: headers })
  }

  langugetall(Id:number):Observable<any>{
    const token  = localStorage.getItem('access_token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    headers.set('Access-Control-Allow-Origin','*');
    return this.httpClient.get(`${this.baseUrl}/api/lngugetall/${Id}`,{ headers: headers })
  }

  gndrgetall(Id:number):Observable<any>{
    const token  = localStorage.getItem('access_token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    headers.set('Access-Control-Allow-Origin','*');
    return this.httpClient.get(`${this.baseUrl}/api/gengetall/${Id}`,{ headers: headers })
  }




}
