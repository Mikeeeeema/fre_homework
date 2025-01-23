import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss',
})
export class AppComponent {
  form: { name: string; email: string } = {
    name: 'Runzhi',
    email: '850937721@qq.com',
  };

  sendData(data: { name: string; email: string }) {
    this.form = data;
  }

  // title = 'form';
  // form: { name: string; email: string } = {
  //   name: 'Mike',
  //   email: '12345@gmail.com',
  // };
  // sendData(data: { name: string; email: string }) {
  //   this.form = data;
  // }
}
