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
import { RegisterService } from '../../services/register.service';

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
    private router: Router,
    private registerService: RegisterService
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

  private asyncCheckEmail(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      const baseURL = 'http://localhost:5566/api/v1/auth/check-email';
      const value: string = control.value;

      // 如果值为空，直接返回 null（同步验证器会处理 "required" 错误）
      if (!value) {
        return of(null);
      }

      return this.http.post(baseURL, { email: value }).pipe(
        map((data: any) => {
          if (data && data.exists) {
            // 假设后端返回 { exists: true }
            return { hasemail: true }; // 返回错误对象
          }
          return null; // 验证通过
        }),
        catchError(() => of(null)) // 捕获错误并返回 null，避免中断验证
      );
    };
  }

  onSubmit() {
    if (this.form.valid) {
      this.registerService.setRegisterData(this.form.value);
      console.log(this.registerService.getRegisterData());
      // this.user.email = this.form.get('email')?.value;
      // this.user.password = this.form.get('password')?.value;
      // console.log(this.user);
    } else {
      console.log('not valid');
    }
    this.router.navigate(['/register/2']);
  }
}
