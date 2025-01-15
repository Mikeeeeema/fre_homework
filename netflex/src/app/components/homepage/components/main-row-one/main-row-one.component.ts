import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-main-row-one',
  standalone: false,

  templateUrl: './main-row-one.component.html',
  styleUrl: './main-row-one.component.scss',
})
export class MainRowOneComponent implements OnInit {
  form!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.maxLength(45)]],
    });
  }

  onSubmit() {}
}
