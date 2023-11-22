// reset-password.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseUrlService } from '../data-services/base-url.service';

interface ResetPasswordResponse {
  isPasswordReset: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class ResetPasswordService {
  private resetPasswordUrl = this.baseUrl.url

  constructor(private http: HttpClient, private baseUrl : BaseUrlService) {}

  resetPassword(userCredential: string, password: string): Observable<ResetPasswordResponse> {
    return this.http.post<ResetPasswordResponse>(`${this.resetPasswordUrl}/reset-password`, { userCredential, password });
  }
}
