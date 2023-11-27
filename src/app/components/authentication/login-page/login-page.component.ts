import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login-services/login.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent {
  email: string = '';
  password: string = '';
  username: string = '';
  showErrorMessage: boolean = false;
  userCredential: string = '';

  credentials = {
    identifier: '',
    password: '',  
  };

  constructor(private router: Router, private loginService: LoginService) {}

  login() {
    if (this.email) this.credentials.identifier = this.email;
    else if (this.username) this.credentials.identifier = this.username;
    else {
      console.log('Please enter either username or email');
      this.showErrorMessage = true;
      return;
    }

    this.credentials.password = this.password;

    this.loginService.login(this.credentials).subscribe(
      (response) => {
        const token = response.token;
        
        if (token) {
          this.loginService.saveToken(token);
          console.log('Login successful');
          this.router.navigate(['/home'])
        } else {
          console.log('Invalid credentials');
        }
      },
      (error) => {
        console.log('Login Unsuccessful', error);
        this.showErrorMessage = true;
      }
    );


  }


  navigateToSignup() {
    this.router.navigate(['/signup']);
  }
}
