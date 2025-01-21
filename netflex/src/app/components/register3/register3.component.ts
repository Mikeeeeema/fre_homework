import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from '../../services/register.service';
import { UserRole } from '../../services/enum/user-role.enum';
import { Router } from '@angular/router';

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
      role: UserRole.USER,
    },
    {
      name: 'Standard',
      price: 15.49,
      quality: 'Better',
      resolution: '1080p',
      allPlatform: true,
      role: UserRole.SUPERUSER,
    },
    {
      name: 'Premium',
      price: 19.99,
      quality: 'Best',
      resolution: '4K + HDR',
      allPlatform: true,
      role: UserRole.ADMIN,
    },
  ];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private registerService: RegisterService
  ) {}
  ngOnInit(): void {
    this.form = this.fb.group({
      role: ['', [Validators.required]],
    });
  }

  onSubmit() {
    const selectedPlan = this.plans.find(
      (plan) => plan.role === this.form.value.role
    );
    if (selectedPlan) {
      this.registerService.setRegisterData({ role: selectedPlan.role });
      console.log(this.registerService.getRegisterData());
      this.registerService.signUp().subscribe(
        (response) => {
          console.log('Registration successful', response);
          this.router.navigate(['/signin']);
        },
        (error) => {
          console.log('Registration failed', error);
        }
      );
    }
  }
}
