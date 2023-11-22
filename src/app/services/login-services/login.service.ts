import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseUrlService } from '../data-services/base-url.service';


interface LoginPasswordResponse {
  isPasswordReset: boolean;
}

@Injectable({
  providedIn: 'root'
})


export class LoginService {

  private loginUrl= this.baseUrl.url;

  constructor(private http:HttpClient , private baseUrl : BaseUrlService) { }


  login(userCredential: string, password: string): Observable<LoginPasswordResponse> {
    return this.http.post<LoginPasswordResponse>(`${this.loginUrl}/login`, { userCredential, password });
  }
  
}
