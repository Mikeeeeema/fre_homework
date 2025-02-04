import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../../services/auth/auth.service';

@Component({
  selector: 'app-main-row-one',
  standalone: false,

  templateUrl: './main-row-one.component.html',
  styleUrl: './main-row-one.component.scss',
})
export class MainRowOneComponent implements OnInit {
  form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  onSubmit(): void {
    if (this.authService.isAuthenticated()) {
      // 如果用户已登录，导航到用户主页
      this.router.navigate(['/signin/userHome']);
    } else {
      // 如果用户未登录，导航到登录页面
      this.router.navigate(['/signin']);
    }
  }
}
