import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register2',
  standalone: false,

  templateUrl: './register2.component.html',
  styleUrl: './register2.component.scss',
})
export class Register2Component implements OnInit {
  form!: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {}
  ngOnInit(): void {
    this.form = this.fb.group({
      username: ['', [Validators.required]],
      tmdb: ['', [Validators.required]],
    });
  }

  onSubmit() {
    if (this.form.valid) {
      console.log(this.form.value);
    } else {
      console.log('not valid');
    }
    this.router.navigate(['/register/3']);
  }
}
