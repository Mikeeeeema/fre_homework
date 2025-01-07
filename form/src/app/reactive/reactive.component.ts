import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  standalone: false,

  templateUrl: './reactive.component.html',
  styleUrl: './reactive.component.scss',
})
export class ReactiveComponent implements OnInit {
  @Output() sendData = new EventEmitter<{ name: string; email: string }>();
  @Input() intialInfo!: { name: string; email: string };
  //in template-driven form we give it as ngFrom

  //need to import ReactiveFormsModu

  //1st
  contactForm!: FormGroup;

  //2nd
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    //1st way
    // this.contactForm = new FormGroup({
    //   name: new FormControl('Mike'),
    //   email: new FormControl('mikema310@gmail.com'),
    // });
    //2nd way
    this.contactForm = this.fb.group({
      name: [this.intialInfo.name],
      email: [this.intialInfo.email],
    });
  }

  onSubmit() {
    console.log(this.contactForm.value);
    this.sendData.emit(this.contactForm.value);
  }
}
