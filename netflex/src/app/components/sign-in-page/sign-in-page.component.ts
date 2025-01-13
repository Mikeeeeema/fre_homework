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

@Component({
  selector: 'app-sign-in-page',
  standalone: false,

  templateUrl: './sign-in-page.component.html',
  styleUrl: './sign-in-page.component.scss',
})
export class SignInPageComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      acc: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }
  onSubmit() {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
    } else {
      console.log('Form is invalid');
    }
    // console.log('Email or phone number: ', this.loginForm.get('acc')?.value);
    // console.log('Password: ', this.loginForm.get('password')?.value);
  }

  navigateToSignUp() {
    this.router.navigate(['/register/1']);
  }

  navigateToHome() {
    this.router.navigate(['/']);
  }
}
