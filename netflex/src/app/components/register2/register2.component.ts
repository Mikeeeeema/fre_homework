import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from '../../services/register.service';

@Component({
  selector: 'app-register2',
  standalone: false,

  templateUrl: './register2.component.html',
  styleUrl: './register2.component.scss',
})
export class Register2Component implements OnInit {
  form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private registerService: RegisterService
  ) {}
  ngOnInit(): void {
    this.form = this.fb.group({
      username: ['', [Validators.required]],
      tmdb_key: ['', [Validators.required]],
    });
  }

  onSubmit() {
    if (this.form.valid) {
      this.registerService.setRegisterData(this.form.value);
      console.log(this.registerService.getRegisterData());
    } else {
      console.log('not valid');
    }
    this.router.navigate(['/register/3']);
  }
}
