import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'form';

  form: { name: string; email: string } = {
    name: 'Mike',
    email: '12345@gmail.com',
  };

  sendData(data: { name: string; email: string }) {
    this.form = data;
  }
}
