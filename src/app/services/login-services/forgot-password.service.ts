// forgot-password.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseUrlService } from '../data-services/base-url.service';

@Injectable({
  providedIn: 'root'
})
export class ForgotPasswordService {
  private apiUrl = this.baseUrl.url; // Replace with your Node.js server API URL

  constructor(private http: HttpClient , private baseUrl : BaseUrlService) {}

  sendVerificationCode( userCredential:string): Observable<any> {
    // console.log(userCredential)
    // console.log("req sent from service file")
    return this.http.post<any>(`${this.apiUrl}/forgot-password`, {userCredential});
  }
}
