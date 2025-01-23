import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  NgForm,
  ValidationErrors,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-reactive',
  standalone: false,

  templateUrl: './reactive.component.html',
  styleUrl: './reactive.component.scss',
})
export class ReactiveComponent implements OnInit {
  // @Output() sendData = new EventEmitter<{ name: string; email: string }>();
  // @Input() intialInfo!: { name: string; email: string };
  // //in template-driven form we give it as ngFrom
  // //need to import ReactiveFormsModu
  // //1st
  // contactForm!: FormGroup;
  // //2nd
  // constructor(private fb: FormBuilder) {}
  // ngOnInit(): void {
  //   //1st way
  //   // this.contactForm = new FormGroup({
  //   //   name: new FormControl('Mike'),
  //   //   email: new FormControl('mikema310@gmail.com'),
  //   // });
  //   //2nd way
  //   this.contactForm = this.fb.group({
  //     name: [this.intialInfo.name],
  //     email: [this.intialInfo.email],
  //   });
  // }
  // onSubmit() {
  //   console.log(this.contactForm.value);
  //   this.sendData.emit(this.contactForm.value);
  // }

  //tryyyyyy
  @Input() form!: { name: string; email: string };
  @Output() sendData = new EventEmitter<{ name: string; email: string }>();

  contactForm!: FormGroup;

  get name() {
    return this.contactForm.get('name');
  }

  get email() {
    return this.contactForm.get('email');
  }

  constructor(private fb: FormBuilder) {}
  ngOnInit(): void {
    this.contactForm = this.fb.group({
      name: [this.form.name, [Validators.required, this.gte]],
      email: [this.form.email, [Validators.required, Validators.email]],
    });

    // this.contactForm = new FormGroup({
    //   name: new FormControl(this.form.name),
    //   email: new FormControl(this.form.email),
    // });
  }

  private gte(control: AbstractControl): ValidationErrors | null {
    const v = control.value.length; // 获取输入值的长度
    if (v <= 10) {
      return { gte: true, requiredValue: 10 }; // 如果长度小于或等于 10，返回验证错误
    }
    return null; // 验证通过
  }

  onSubmit() {
    console.log(this.contactForm.value);
    this.sendData.emit(this.contactForm.value);
  }
}
