import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template: `<h1>Hello</h1>`,
  standalone: false,
  styleUrl: './app.component.css',
  // styles: [``],
})
export class AppComponent {
  title = 'my-app';
}
