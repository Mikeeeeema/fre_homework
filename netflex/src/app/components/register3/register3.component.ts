import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register3',
  standalone: false,

  templateUrl: './register3.component.html',
  styleUrl: './register3.component.scss',
})
export class Register3Component implements OnInit {
  form!: FormGroup;

  plans = [
    {
      name: 'Basic',
      price: 9.99,
      quality: 'Good',
      resolution: '480p',
      allPlatform: true,
    },
    {
      name: 'Standard',
      price: 15.49,
      quality: 'Better',
      resolution: '1080p',
      allPlatform: true,
    },
    {
      name: 'Premium',
      price: 19.99,
      quality: 'Best',
      resolution: '4K + HDR',
      allPlatform: true,
    },
  ];

  constructor(private fb: FormBuilder) {}
  ngOnInit(): void {
    this.form = this.fb.group({
      selectedPlan: ['', [Validators.required]],
    });
  }

  onSubmit() {
    console.log(this.form.value);
  }
}
