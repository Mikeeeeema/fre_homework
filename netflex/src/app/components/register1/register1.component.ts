import { Component, OnInit } from '@angular/core';
import { userInfo } from '../../services/interfaces/moive.interface';
import {
  AbstractControl,
  AsyncValidatorFn,
  FormBuilder,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { catchError, map, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register1',
  standalone: false,

  templateUrl: './register1.component.html',
  styleUrl: './register1.component.scss',
})
export class Register1Component implements OnInit {
  user!: userInfo;
  form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.form = this.fb.group({
      email: [
        '',
        [Validators.required, Validators.email],
        [this.asyncCheckEmail()],
      ],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  //???
  private asyncCheckEmail(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      const baseURL = 'http://localhost:4231/auth/check-email';
      const value: string = control.value;

      return this.http.post(baseURL, { email: value }).pipe(
        map((data: any) => {
          console.log(data);
          if (data) {
            return { hasemail: true };
          }
          return null;
        }),
        catchError(() => of(null))
      );
    };
  }

  // private asyncCheckEmail(): AsyncValidatorFn {
  //   return (control: AbstractControl): Observable<ValidationErrors | null> => {
  //     const baseURL = 'http://localhost:4231/auth/check-email';
  //     const value: string = control.value;

  //     // 如果值为空，直接返回 null（同步验证器会处理 "required" 错误）
  //     if (!value) {
  //       return of(null);
  //     }

  //     return this.http.post(baseURL, { email: value }).pipe(
  //       map((data: any) => {
  //         if (data && data.exists) {
  //           // 假设后端返回 { exists: true }
  //           return { hasemail: true }; // 返回错误对象
  //         }
  //         return null; // 验证通过
  //       }),
  //       catchError(() => of(null)) // 捕获错误并返回 null，避免中断验证
  //     );
  //   };
  // }

  onSubmit() {
    if (this.form.valid) {
      console.log(this.form.value);
      // this.user.email = this.form.get('email')?.value;
      // this.user.password = this.form.get('password')?.value;
      // console.log(this.user);
    } else {
      console.log('not valid');
    }
    this.router.navigate(['/register/2']);
  }
}
