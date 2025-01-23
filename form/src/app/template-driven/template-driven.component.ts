import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven',
  standalone: false,

  templateUrl: './template-driven.component.html',
  styleUrl: './template-driven.component.scss',
})
export class TemplateDrivenComponent {
  // user = {
  //   name: 'Mike',
  //   email: 'mikema310@gmail.com',
  // };
  // //ngForm 是模板中的引用变量，而 NgForm 是 TypeScript 中的类名。它们在不同的上下文中使用，但都与 Angular 表单相关。
  // onSubmit(form: NgForm) {
  //   console.log(form.value);
  // }

  user = {
    name: '',
    email: '123@qq.com',
  };

  onSubmit(form: NgForm) {
    console.log(form.value);
  }
}
