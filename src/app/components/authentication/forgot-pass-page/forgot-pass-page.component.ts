// forgot-pass-page.component.ts

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerDataService } from 'src/app/services/login-services/customer-data.service';
import { ForgotPasswordService } from 'src/app/services/login-services/forgot-password.service';


@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-pass-page.component.html',
  styleUrls: ['./forgot-pass-page.component.scss']
})

export class ForgotPassPageComponent {
  userCredential:string=''
  isMailSent: boolean = false;
  mailSentMsg: string = '';
  mailNotSentMsg: string = '';

  constructor(
    private router: Router,
    private forgotPasswordService: ForgotPasswordService,
    private customerData : CustomerDataService
  ) {}

  sendVerificationCode() {
    if(!this.userCredential){
      console.log("Enter any Value : ", this.userCredential)
      return;
    }else{
      this.customerData.userCredential= this.userCredential
    this.forgotPasswordService.sendVerificationCode(this.userCredential).subscribe(
      (response) => {
        this.isMailSent = true;
        this.mailSentMsg = response.message;
        this.router.navigate(['./verify-code']);
      },
      (error) => {
        this.isMailSent = false;
        this.mailNotSentMsg = 'Error sending verification code. Please try again.';
        console.error('Error sending verification code:', error);
      }
    );
  }
}
}
