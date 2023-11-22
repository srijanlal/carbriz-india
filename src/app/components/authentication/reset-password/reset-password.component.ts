import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { CustomerDataService } from 'src/app/services/login-services/customer-data.service';
import { ResetPasswordService } from 'src/app/services/login-services/reset-password.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent {
  password1:string=''
  password2:string=''

  constructor(
    private customerData: CustomerDataService,
    private resetPasswordService: ResetPasswordService,
    private router : Router
    ){}


    resetPassword() {
      if (this.password1 != this.password2) {
        console.log('Password is not matching');
        return;
      }
    
      console.log('RESET BUTTON CLICKED');
      console.log('User Credential:', this.customerData.userCredential);
      console.log('Password:', this.password1);
    
      this.resetPasswordService.resetPassword(this.customerData.userCredential, this.password1).subscribe(
        (response) => {
          if (response.isPasswordReset) {
            console.log('Password changed successfully !!');
            this.router.navigate(['./home']);
          }
        },
        (error) => {
          console.log('Password reset Unsuccessful !!', error);
        }
      );
    }
    

}
