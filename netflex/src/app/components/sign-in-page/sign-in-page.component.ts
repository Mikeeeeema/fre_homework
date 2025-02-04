import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  RequiredValidator,
  Validators,
} from '@angular/forms';
import { log } from 'console';
import { UserService } from '../../services/user.service';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-sign-in-page',
  standalone: false,

  templateUrl: './sign-in-page.component.html',
  styleUrl: './sign-in-page.component.scss',
})
export class SignInPageComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private userService: UserService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }
  onSubmit() {
    if (this.loginForm.valid) {
      const credentials = {
        email: this.loginForm.get('email')?.value,
        password: this.loginForm.get('password')?.value,
      };

      this.userService.signIn(credentials).subscribe(
        (response) => {
          console.log('Login successful', response);
          console.log('Storing token:', response.accessToken);
          localStorage.setItem('token', response.accessToken);
          localStorage.setItem('role', response.role); // 存储角色信息
          this.authService.register(response.accessToken);
          this.router.navigate(['/signin/userHome']);
        },
        (error) => {
          console.log('Login failed', error);
        }
      );
    } else {
      console.log('Form is invalid');
    }
  }

  navigateToSignUp() {
    this.router.navigate(['/register/1']);
  }

  navigateToHome() {
    this.router.navigate(['/']);
  }
}
