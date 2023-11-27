import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { BaseUrlService } from '../data-services/base-url.service';


interface LoginPasswordResponse {
  isPasswordReset: boolean;
}

@Injectable({
  providedIn: 'root'
})


export class LoginService {

  private apiUrl = this.baseUrl.url; // Replace with your Node.js server API URL

  constructor(private http: HttpClient, private baseUrl : BaseUrlService) {}

  login(credentials: { identifier: string; password: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, credentials);
  }

  saveToken(token: string): void {
    localStorage.setItem('user_token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('user_token');
  }
  
}
