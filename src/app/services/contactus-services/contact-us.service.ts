import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseUrlService } from '../data-services/base-url.service';

@Injectable({
  providedIn: 'root'
})
export class ContactUsService {

  private apiUrl = this.baseUrl.url; // Replace with your Node.js server API URL

  constructor(private http: HttpClient, private baseUrl : BaseUrlService) {}
  sendMessage(name: string, subject: string, message : string): Observable<any>{
    console.log(name)
      return this.http.post<any>(`${this.apiUrl}/contact-us`, {name, subject, message});
  }
}
