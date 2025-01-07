import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven',
  standalone: false,

  templateUrl: './template-driven.component.html',
  styleUrl: './template-driven.component.scss',
})
export class TemplateDrivenComponent {
  user = {
    name: 'Mike',
    email: 'mikema310@gmail.com',
  };
  onSubmit(form: NgForm) {
    console.log(form.value);
  }
}
