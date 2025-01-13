import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  AbstractControl,
  AsyncValidator,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { catchError, map, Observable, of } from 'rxjs';

@Component({
  selector: 'app-validators',
  standalone: false,

  templateUrl: './validators.component.html',
  styleUrl: './validators.component.scss',
})
export class ValidatorsComponent {
  form!: FormGroup;
  get name() {
    return this.form.get('name');
  }

  get email() {
    return this.form.get('email');
  }

  constructor(private fb: FormBuilder, private http: HttpClient) {
    // this.form = new FormGroup({
    //   // name: new FormControl('', [Validators.required, Validators.minLength(5)]),
    //   name: new FormControl('', [this.gte]),
    //   email: new FormControl('', Validators.email),
    // });
  }

  ngOnInit(): void {
    // this.form = this.fb.group({
    //   name: new FormControl('', [Validators.required, Validators.minLength(5)]),
    //   email: new FormControl('', Validators.email),
    // });

    this.form = new FormGroup({
      // name: new FormControl('', [Validators.required, Validators.minLength(5)]),
      name: new FormControl('', [this.gte]),
      email: new FormControl('', [this.asyncCheckEmail()]),
    });
  }

  private gte(control: AbstractControl): ValidationErrors | null {
    const v = control.value.length;

    if (isNaN(v)) {
      return { gte: true, requiredValue: 10 };
    }

    if (v <= 10) {
      console.log('<=10');
      return { gte: true, requiredValue: 10 };
    }

    return null;
  }

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

  onSubmit() {
    console.log(this.form.controls);
  }
}

interface AsyncValidatorFn {
  (control: AbstractControl):
    | Promise<ValidationErrors | null>
    | Observable<ValidationErrors | null>;
}
