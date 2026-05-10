import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/Modele/User.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  loginForm: FormGroup;
  emailInput: FormControl;
  passwordInput: FormControl;

  externalErrorMsg: string;

  constructor(
    private router: Router,
    private authService: AuthService
  ) {
    this.emailInput = new FormControl('', [Validators.required, Validators.email]);
    this.passwordInput = new FormControl('', [Validators.required]);
    this.loginForm = new FormGroup({
      email: this.emailInput,
      password: this.passwordInput,
    });
    this.externalErrorMsg = '';
  }

  ngOnInit(): void {
  }

  login() {
   
    this.authService.login(this.loginForm.value.email, this.loginForm.value.password).subscribe({
      next: (response) => {
        console.log('Login successful');

        
        localStorage.removeItem('authToken');
        localStorage.setItem('authToken', response.authToken);

        
        this.authService.authenticate().subscribe({
          next: (userData: User) => {
           
            
            localStorage.setItem('currentUser', JSON.stringify(userData));
            this.authService.currentUserSubject.next(userData);

            
            this.router.navigate(['/Pet']);

          },
          error: error => {
            this.externalErrorMsg = 'Internal error please try again later';
          }

        }
        );
      },
      error: error => {
        console.log(error, error.status)
        if(error.status === 403) {
          this.externalErrorMsg = 'Wrong username/password';
        }
      }
    });
  }
}
