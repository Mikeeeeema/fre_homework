import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  standalone: false,

  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss',
})
export class ContactUsComponent implements OnInit {
  form!: FormGroup;
  result: { name: string; message: string } = { name: '', message: '' };
  ifShowMessage: boolean = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', [Validators.required]],
      message: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  onSubmit() {
    if (this.form.valid) {
      this.result.name = this.form.get('name')?.value;
      this.result.message = this.form.get('message')?.value;
      this.ifShowMessage = true;
    }
  }

  back() {
    this.ifShowMessage = false;
    this.form.reset(); // 重置表单
    this.result = { name: '', message: '' }; // 清空结果
  }
}
